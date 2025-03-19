export const Spinner = () => (
    <div className="flex w-full min-h-100 items-center justify-center">
        <div
            className={`inline-block h-50 w-50 animate-spin rounded-full border-4 border-solid border-current border-t-transparent text-blue-500`}
            role="status"
        >
            <span className="sr-only">Loading...</span>
        </div>
    </div>
);