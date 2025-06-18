import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const NewsCard = ({ post }: any) => {
  const { t } = useTranslation();
  const theme = useSelector((state: RootState) => state.theme.currentTheme);
  return (
    <>
      {" "}
      <div
        id="card"
        className={`border-[1px] rounded-lg w-[350px] ${
          theme === "dark"
            ? "bg-[#1F2937] text-white border-gray-600"
            : "bg-white text-black border-gray-300"
        }`}
      >
        <img
          className="h-44 rounded-t-lg w-full object-cover shadow-md"
          src={`https://picsum.photos/800/400?random=${post.id}`}
          alt="Heart Balloons"
          onError={(e: any) => (e.target.src = "/no_img.jpg")}
        />

        <div className="flex flex-col px-3 gap-5 pt-4 pb-5 ">
          <h6 className="font-semibold line-clamp-2 min-h-[3rem]">
            {post.title}
          </h6>

          <p className="text-sm line-clamp-3 min-h-[4rem]">{post.body}</p>

          <Link to={`post/${post.id}`}>
            <button className="w-full border-[1px] border-gray-400 py-0.5 rounded-md">
              {t("read_more")}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
