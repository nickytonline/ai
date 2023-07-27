import { useEffect } from "react";
import { RepoQueryPages } from "../components/Dialog";

export const IndexingPage = ({ ownerName, repoName, setCurrentPage }: { ownerName: string, repoName: string, setCurrentPage: (page: RepoQueryPages) => void }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentPage(RepoQueryPages.Chat);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);


    return (
        <div
            className="flex flex-col justify-center items-center w-full h-full"
            id="chat-dialog-body-loading-spinner"
        >
            <div className="text-2xl font-bold text-slate-700">RepoQuery</div>

            <p className="text-sm text-gray-500 w-5/6 text-center mt-4">
                We are indexing
                {" "}

                {ownerName}
                /

                {repoName}
                . This may take a while.
            </p>

            <div className="mt-4">
                <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-orange"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />

                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0
                        004 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                </svg>
            </div>
        </div>
    );
};
