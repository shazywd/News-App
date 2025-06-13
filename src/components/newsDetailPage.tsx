import { FaArrowLeft, FaEnvelope, FaGlobe, FaPhone } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import {
  useGetPostByIdQuery,
  useGetUserByIdQuery,
} from "../features/news/newsApi";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";

export default function NewsDetailPage() {
  const theme = useSelector((state: RootState) => state.theme.currentTheme);
  const { postId } = useParams();
  const { t } = useTranslation();
  const {
    data: post,
    isLoading,
    isError,
  } = useGetPostByIdQuery(Number(postId));

  const {
    data: author,
    isLoading: authorLoading,
    isError: authorError,
  } = useGetUserByIdQuery(post?.userId!, {
    skip: !post?.userId, // wait for userId  availablity
  });
  const { i18n } = useTranslation();
  const dir = i18n.language === "ar" ? "rtl" : "ltr";
  // Loading states
  if (isLoading || authorLoading)
    return <div className="p-8 text-xl">Loading...</div>;
  if (isError || !post || authorError || !author)
    return <div className="p-8 text-red-500">Failed to load content.</div>;

  return (
    <div
      dir={dir}
      className={`${
        theme === "dark"
          ? "!bg-[#111827] !text-white"
          : "!bg-[#F9FAFB] !text-black"
      } max-w`}
    >
      <div className={` max-w-4xl mx-auto px-4  py-8`}>
        <Link to="/">
          <button className="mb-6 flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline">
            <FaArrowLeft className="mr-2 h-4 w-4" />
            {t("back")}
          </button>
        </Link>

        <h1
          className={`${
            theme === "dark" ? "dark:text-white" : "text-gray-900"
          } text-3xl font-bold mb-4`}
        >
          {post.title}
        </h1>

        <div className="mb-6">
          <img
            onError={(e) => (e.target.src = "/no_img.jpg")}
            src={`https://picsum.photos/800/400?random=${post.id}`}
            alt="Sample Post"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>

        <div className="flex gap-4 items-center mb-6 p-4 bg-white dark:bg-transparent rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xl mr-4">
            {author.name.charAt(0)}
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">
              {author.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              @{author.username}
            </p>
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none mb-8">
          <p
            className={`leading-relaxed whitespace-pre-line ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {post.body}
          </p>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
          <h2
            className={`text-xl font-semibold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Author
          </h2>

          <div className="bg-white dark:bg-gray-800/90 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <div className="mb-4  md:mb-0 md:mr-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-2xl">
                  {author.name.charAt(0)}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {author.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  @{author.username}
                </p>
                <div className="mt-2 space-y-1">
                  <div className="flex items-center text-sm">
                    <FaEnvelope className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {author.email}
                    </span>
                  </div>
                  <div className="flex items-center text-sm">
                    <FaPhone className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {author.phone}
                    </span>
                  </div>
                  <div className="flex items-center text-sm">
                    <FaGlobe className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                    <a
                      href={`https://${author.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {author.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
