from scholarly import scholarly
import pandas as pd
import time

def fetch_and_save_papers():
    print("正在搜索何永兴教授的谷歌学术主页...")
    
    # 1. 搜索作者（精确匹配兰州大学）
    search_query = scholarly.search_author('Yongxing He, Lanzhou University')
    try:
        author = next(search_query)
        print(f"找到作者: {author['name']} - {author['affiliation']}")
    except StopIteration:
        print("未找到匹配的作者，请检查搜索关键词。")
        return

    # 2. 填充论文详细信息
    print("正在抓取论文列表，请稍候（这可能需要一分钟）...")
    author = scholarly.fill(author, sections=['publications'])
    publications = author['publications']

    data = []
    
    # 3. 遍历并提取具体字段
    for pub in publications:
        # 为了防止被封，每篇论文稍微填充一点信息
        # 注意：这里 fill(pub) 会产生大量请求，如果论文多建议只取基础信息
        # 或者增加 time.sleep(1)
        bib = pub['bib']
        
        # 提取信息，如果字段不存在则留空
        paper_info = {
            "Year": bib.get('pub_year', 'N/A'),
            "Title": bib.get('title', 'Untitled'),
            "Authors": bib.get('author', 'Unknown'),
            "Journal": bib.get('journal', bib.get('publisher', 'Academic Publication')),
            "Link": f"https://scholar.google.com/citations?view_op=view_citation&citation_for_view={pub['author_pub_id']}"
        }
        data.append(paper_info)
        print(f"已获取: {paper_info['Year']} - {paper_info['Title'][:50]}...")

    # 4. 转换为 Pandas DataFrame 并按年份排序
    df = pd.DataFrame(data)
    # 将 Year 转为数字以便排序，非数字转为 0
    df['Year_Int'] = pd.to_numeric(df['Year'], errors='coerce').fillna(0).astype(int)
    df = df.sort_values(by='Year_Int', ascending=False).drop(columns=['Year_Int'])

    # 5. 导出 CSV
    output_file = 'publications.csv'
    df.to_csv(output_file, index=False, encoding='utf-8-sig')
    print(f"\n🎉 成功！共获取 {len(df)} 篇论文。")
    print(f"文件已保存至: {output_file}")

if __name__ == "__main__":
    fetch_and_save_papers()