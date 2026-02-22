/**
 * He Lab - Data Configuration
 * 直接修改下面的数组即可更新论文和团队成员，无需懂代码
 * Simply edit the arrays below to update papers and team members
 */

// ============ 论文数据源 Publications Data Source ============
// Google Sheets CSV 链接，用于 publications 页面和首页 Featured Publications
// 表头需包含：Year, Title, Authors, Journal, Link, Featured（Featured 列填 yes/no 控制是否在首页精选展示）
const PUBLICATIONS_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQlys1Ph7q5EOqbj6iBMuw_oA0qIl9I81PZl-QftpJW8RcwFjnBouIEAGib_xQlrN9rAIviPoLqJ7Fh/pub?output=csv';

// ============ 精选论文 Featured Publications（备用/已弃用） ============
// 首页 Featured 现已从 Google Sheet 的 Featured 列动态加载，以下仅作 data.js 兼容保留
// 首页展示的3篇，可从 PUBLICATIONS 中挑选或单独维护
// 3 papers for homepage, can pick from PUBLICATIONS or maintain separately
const FEATURED_PAPERS = [
  {
    title: "Molecular mechanisms of multidrug resistance in bacterial pathogens",
    authors: "Zhang L, Wang Y, He Y, et al.",
    journal: "Nature Communications",
    year: "2024",
    pdfUrl: ""
  },
  {
    title: "Structural insights into phage-bacteria interactions",
    authors: "Li X, Chen M, He Y, et al.",
    journal: "Cell",
    year: "2023",
    pdfUrl: ""
  },
  {
    title: "Biosynthesis of secondary metabolites in Streptomyces",
    authors: "Wang H, Liu J, He Y, et al.",
    journal: "PNAS",
    year: "2023",
    pdfUrl: ""
  }
];

// ============ 全部论文 Full Publications ============
// 格式: title, authors, journal, year, pdfUrl
// 按年份从新到旧添加，分页时每页显示10篇
const PUBLICATIONS = [
  { title: "Molecular mechanisms of multidrug resistance in bacterial pathogens", authors: "Zhang L, Wang Y, He Y, et al.", journal: "Nature Communications", year: "2024", pdfUrl: "" },
  { title: "Structural insights into phage-bacteria interactions", authors: "Li X, Chen M, He Y, et al.", journal: "Cell", year: "2023", pdfUrl: "" },
  { title: "Biosynthesis of secondary metabolites in Streptomyces", authors: "Wang H, Liu J, He Y, et al.", journal: "PNAS", year: "2023", pdfUrl: "" },
  { title: "Crystal structure of antibiotic resistance protein MdtM", authors: "He Y, Liu S, Zhang X, et al.", journal: "Nature Structural & Molecular Biology", year: "2023", pdfUrl: "" },
  { title: "Mechanism of efflux pump inhibition in E. coli", authors: "Chen M, Li X, He Y, et al.", journal: "Journal of Biological Chemistry", year: "2023", pdfUrl: "" },
  { title: "Phage tail fiber recognition of bacterial receptors", authors: "Wang Y, Zhang L, He Y, et al.", journal: "Science Advances", year: "2022", pdfUrl: "" },
  { title: "Secondary metabolite biosynthesis in actinomycetes", authors: "Liu J, Wang H, He Y, et al.", journal: "ACS Chemical Biology", year: "2022", pdfUrl: "" },
  { title: "Structural basis of multidrug recognition", authors: "He Y, Zhang X, Chen M, et al.", journal: "Structure", year: "2022", pdfUrl: "" },
  { title: "Bacterial stress response and antibiotic resistance", authors: "Li X, Wang Y, He Y, et al.", journal: "mBio", year: "2022", pdfUrl: "" },
  { title: "Microbe-phage coevolution mechanisms", authors: "Zhang L, Liu S, He Y, et al.", journal: "PLOS Genetics", year: "2021", pdfUrl: "" },
  { title: "Enzymatic assembly of polyketide backbones", authors: "Wang H, Chen M, He Y, et al.", journal: "Angewandte Chemie", year: "2021", pdfUrl: "" },
  { title: "Membrane protein folding and stability", authors: "He Y, Li X, Zhang L, et al.", journal: "Biophysical Journal", year: "2021", pdfUrl: "" },
  { title: "Antibiotic resistance gene regulation", authors: "Liu J, Wang Y, He Y, et al.", journal: "Nucleic Acids Research", year: "2020", pdfUrl: "" },
  { title: "Structural genomics of efflux pumps", authors: "Zhang X, Chen M, He Y, et al.", journal: "Protein Science", year: "2020", pdfUrl: "" },
  { title: "Bacterial cell wall biosynthesis", authors: "Wang Y, Liu S, He Y, et al.", journal: "Journal of Bacteriology", year: "2020", pdfUrl: "" },
  { title: "Phage receptor binding proteins", authors: "He Y, Zhang L, Wang H, et al.", journal: "Virology", year: "2019", pdfUrl: "" },
  { title: "Metabolite sensing in bacteria", authors: "Li X, Liu J, He Y, et al.", journal: "Molecular Microbiology", year: "2019", pdfUrl: "" },
  { title: "Kinase signaling in stress adaptation", authors: "Chen M, Wang Y, He Y, et al.", journal: "Journal of Molecular Biology", year: "2018", pdfUrl: "" },
  { title: "Transporter substrate specificity", authors: "He Y, Zhang X, Liu S, et al.", journal: "Biochemistry", year: "2018", pdfUrl: "" },
  { title: "Bacterial two-component systems", authors: "Wang H, Li X, He Y, et al.", journal: "Current Opinion in Microbiology", year: "2017", pdfUrl: "" },
  { title: "Structural biology of membrane proteins", authors: "He Y, Chen M, Zhang L, et al.", journal: "Trends in Biochemical Sciences", year: "2017", pdfUrl: "" },
  { title: "Antibiotic discovery from natural products", authors: "Liu S, Wang Y, He Y, et al.", journal: "Natural Product Reports", year: "2016", pdfUrl: "" },
  { title: "Bacterial resistance mechanisms", authors: "He Y, Zhang X, Wang H, et al.", journal: "FEMS Microbiology Reviews", year: "2016", pdfUrl: "" },
  { title: "X-ray crystallography of membrane proteins", authors: "Zhang L, He Y, Liu J, et al.", journal: "Methods in Enzymology", year: "2015", pdfUrl: "" },
  { title: "Molecular basis of drug efflux", authors: "He Y, Wang Y, Chen M, et al.", journal: "Pharmacological Reviews", year: "2015", pdfUrl: "" }
];

// ============ Google Calendar ============
// 在 Google Calendar 设置中获取: 设置 → 日历 → 集成日历 → 嵌入代码 或 公开地址
// Get from Google Calendar: Settings → Your calendar → Integrate calendar → Embed code or Public address
const GOOGLE_CALENDAR_EMBED_URL = "";  // 嵌入用 iframe src，如 "https://calendar.google.com/calendar/embed?src=xxx"
const GOOGLE_CALENDAR_LINK_URL = "";  // 点击打开日历的链接，如 "https://calendar.google.com/calendar/u/0?cid=xxx"

// ============ 研究方向 Research Areas ============
// 每项: title, description, icon (FontAwesome 类名，如 "fa-dna")
const RESEARCH_AREAS = [
  { title: "Multidrug Resistance", description: "We study the molecular mechanisms of antibiotic resistance in bacterial pathogens, including efflux pumps, resistance gene regulation, and structural basis of drug recognition.", icon: "fa-shield-halved" },
  { title: "Structural Biology", description: "Using X-ray crystallography and cryo-EM, we determine high-resolution structures of membrane proteins and protein complexes involved in drug transport and bacterial signaling.", icon: "fa-atom" },
  { title: "Microbe-Phage Interactions", description: "We investigate how bacteriophages recognize and infect bacterial hosts, and the structural basis of phage receptor binding proteins.", icon: "fa-virus" },
  { title: "Secondary Metabolite Biosynthesis", description: "Our lab explores the biosynthesis of natural products in actinomycetes, including polyketide synthases and regulatory mechanisms.", icon: "fa-flask" }
];

// ============ 团队成员数据源 Team Data Source ============
// Google Sheets CSV 链接，表头：Name, Role, Program, Research, Photo, Status
// Status 填 Current=在职成员，Alumni=已毕业/离组
const TEAM_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTd6HesDFZBeI_ylZ7jNPrMr1zsvD8hxmkyLheLg7WcuyVIa-y2Hdq5E2wHkkhgzIYn3IPhMDMVOaWa/pub?output=csv';

// ============ 内部资源 Internal Links (仅实验室成员) ============
// 每项: title, url, description (可选)
const INTERNAL_LINKS = [
  { title: "Lab Meeting Schedule", url: "#", description: "Weekly lab meeting times and topics" },
  { title: "Shared Drive (Google Drive / OneDrive)", url: "#", description: "Lab documents and protocols" },
  { title: "Equipment Booking", url: "#", description: "Reserve lab instruments" },
  { title: "Protocols & SOPs", url: "#", description: "Standard operating procedures" }
];
