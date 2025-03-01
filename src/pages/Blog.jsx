// components/Blog.js
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../hooks/useTranslation";
import blogs from "../data/blog";

const Blog = () => {
    const { language } = useLanguage();
    const { t } = useTranslation();
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedBlog, setSelectedBlog] = useState(null);

    const categories = [
        "All",
        "Criminal Law",
        "Family Law",
        "Property Law",
        "Labor Law",
        "Business Law"
    ];

    const filteredBlogs = blogs.filter(blog => {
        const title = language === "en" ? blog.title_en : blog.title_bn;
        const content = language === "en" ? blog.content_en : blog.content_bn;

        const matchesSearch =
            title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            content.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory =
            selectedCategory === "All" || blog.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    const BlogCard = ({ blog }) => (
        <div
            className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl cursor-pointer border border-gray-100"
            onClick={() => setSelectedBlog(blog)}
        >
            <img
                src={blog.image}
                alt={language === "en" ? blog.title_en : blog.title_bn}
                className="w-full h-48 object-cover"
            />
            <div className="p-6 bg-gradient-to-b from-gray-50 to-white">
                <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
                    {t(blog.category.toLowerCase().replace(" ", "_")) || blog.category}
                </span>
                <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-indigo-600 transition-colors">
                    {language === "en" ? blog.title_en : blog.title_bn}
                </h2>
                <p className="text-gray-600 line-clamp-3 leading-relaxed">
                    {language === "en" ? blog.content_en : blog.content_bn}
                </p>
                <div className="mt-4 text-sm text-gray-400">
                    {new Date(blog.date).toLocaleDateString(language === "en" ? "en-US" : "bn-BD")}
                </div>
            </div>
        </div>
    );

    const FullBlogView = ({ blog, onClose }) => (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200">
                <div className="p-6 bg-gradient-to-b from-gray-50 to-white">
                    <div className="flex justify-between items-center mb-6">
                        <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-medium px-2.5 py-1 rounded-full">
                            {t(blog.category.toLowerCase().replace(" ", "_")) || blog.category}
                        </span>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-indigo-600 text-xl font-bold transition-colors"
                        >
                            ✕
                        </button>
                    </div>
                    <img
                        src={blog.image}
                        alt={language === "en" ? blog.title_en : blog.title_bn}
                        className="w-full h-64 object-cover rounded-lg mb-6 border border-gray-200"
                    />
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        {language === "en" ? blog.title_en : blog.title_bn}
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        {language === "en" ? blog.content_en : blog.content_bn}
                    </p>
                    <div className="text-sm text-gray-400 italic">
                        {new Date(blog.date).toLocaleDateString(language === "en" ? "en-US" : "bn-BD")}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
            <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center bg-gradient-to-r from-indigo-600 to-blue-500 text-transparent bg-clip-text">
                {t("blog")}
            </h1>

            {/* Search and Filter Controls */}
            <div className="mb-10 flex flex-col sm:flex-row gap-4 sticky top-16 bg-white z-10 p-4 rounded-lg shadow-md border border-gray-100">
                <input
                    type="text"
                    placeholder={t("search") + "..."}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50 text-gray-700 placeholder-gray-400"
                />
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50 text-gray-700"
                >
                    {categories.map(category => (
                        <option key={category} value={category}>
                            {t(category.toLowerCase().replace(" ", "_")) || category}
                        </option>
                    ))}
                </select>
            </div>

            {/* Blog List */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredBlogs.map(blog => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>

            {filteredBlogs.length === 0 && (
                <p className="text-center text-gray-500 mt-8">
                    {t("no_results_found")}
                </p>
            )}

            {/* Full Blog View Modal */}
            {selectedBlog && (
                <FullBlogView blog={selectedBlog} onClose={() => setSelectedBlog(null)} />
            )}
        </div>
    );
};

export default Blog;