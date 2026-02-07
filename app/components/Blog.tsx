import { BookOpen, Calendar, ArrowRight } from "lucide-react";

export function Blog() {
  const posts = [
    {
      title: "Angular Performance Optimization: Beyond the Basics",
      excerpt: "Deep dive into advanced performance techniques for large-scale Angular applications, including change detection strategies and runtime optimization.",
      date: "January 15, 2026",
      readTime: "8 min read"
    },
    {
      title: "Architecting Enterprise Angular Applications",
      excerpt: "Strategic patterns and practices for building maintainable Angular applications that scale with your organization's growth.",
      date: "December 20, 2025",
      readTime: "12 min read"
    },
    {
      title: "Migration Strategies: AngularJS to Modern Angular",
      excerpt: "Proven approaches for migrating legacy AngularJS codebases to modern Angular with minimal disruption to business operations.",
      date: "November 8, 2025",
      readTime: "10 min read"
    }
  ];

  return (
    <section id="blog" className="bg-[#F9FAFB] py-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-8">
          <h2 className="text-4xl mb-4 text-[#1E293B]">Technical Blog</h2>
          <p className="text-xl text-[#6B7280] max-w-3xl">
            In-depth articles on Angular architecture, performance, and enterprise development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-white p-8 border border-[#E5E7EB] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 text-sm text-[#9CA3AF] mb-4">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
                <span className="text-[#D1D5DB]">•</span>
                <span>{post.readTime}</span>
              </div>
              
              <h3 className="text-xl mb-4 text-[#1E293B] leading-snug">
                {post.title}
              </h3>
              
              <p className="text-[#6B7280] mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              
              <a 
                href="#"
                className="inline-flex items-center gap-2 text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
              >
                Read Article
                <ArrowRight className="w-4 h-4" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#"
            className="inline-flex items-center gap-2 text-[#2563EB] hover:text-[#1D4ED8] transition-colors text-lg"
          >
            <BookOpen className="w-5 h-5" />
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
}
