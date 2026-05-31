import { motion } from 'framer-motion';
import { contentService } from '../../services/contentService';

export default function NewsSection() {
  const articles = contentService.getNewsArticles();

  return (
    <section className="py-24 bg-white" id="news" aria-label="Press and news">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-14">
          <div>
            <span className="text-xs text-[#3c5e98] font-bold uppercase tracking-[0.2em] mb-3 block">Institutional Updates</span>
            <h2 className="text-3xl font-semibold text-[#1a1c1c] tracking-tight">Press &amp; Insights</h2>
          </div>
          <a
            href="#"
            className="text-[#00132c] text-sm font-bold flex items-center gap-1 group hover:gap-2 transition-all mt-6 md:mt-0"
          >
            Browse all updates
            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.article
              key={article.id}
              className="bg-white border border-[#c3c6d0] group hover:border-[#00132c] transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <div className="aspect-video overflow-hidden bg-[#e3e2e2]">
                <img
                  src={`https://images.unsplash.com/photo-${i === 0 ? '1524178232363-1fb2b075b655' : i === 1 ? '1488521787991-ed7bbaae773c' : '1582213782179-e0d53f98f2ca'}?w=600&q=80`}
                  alt={article.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#00132c]/10 text-[#00132c] px-3 py-1 text-xs font-bold uppercase tracking-wider">
                    {article.category}
                  </span>
                  <time className="text-[#43474e] text-xs">{article.date}</time>
                </div>
                <h3 className="text-lg font-semibold text-[#1a1c1c] mb-3 group-hover:text-[#00132c] transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-[#43474e] line-clamp-3 mb-5 leading-relaxed">{article.summary}</p>
                <button className="text-[#00132c] text-sm font-bold flex items-center gap-1 group/btn hover:gap-2 transition-all">
                  Read More
                  <span className="material-symbols-outlined text-base group-hover/btn:translate-x-1 transition-transform">chevron_right</span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
