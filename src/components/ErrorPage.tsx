import React from "react";

interface Props {
  errorMsg: string;
}

const ErrorPage: React.FunctionComponent<Props> = ({ errorMsg }) => {
  return (
    <div className="place-content-center px-4 dark:bg-gray-900 max-w-sm mx-auto">
      <h1 className="uppercase tracking-widest text-gray-500 dark:text-gray-300">
        {errorMsg}
      </h1>
    </div>
  );
};

export default ErrorPage;
