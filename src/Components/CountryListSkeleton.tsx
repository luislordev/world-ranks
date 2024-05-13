interface CountryListSkeletonProps {
    classname?: string
}

export const CountryListSkeleton = ({ classname = '' }: CountryListSkeletonProps) => {
    return (
        <section className={`${classname} animate-pulse`}>
            <div className="grid grid-cols-7 lg:grid-cols-9 gap-8 lg:gap-16 text-xs text-grey-dark border-b-2 pb-4 border-bg-secondary">
                <div className="col-span-1 h-2.5 bg-gray-700 rounded-full w-20 :mb-4 " />
                <div className="col-span-2 h-2.5 bg-gray-700 rounded-full w-20 mb-4" />
                <div className="col-span-2 h-2.5 bg-gray-700 rounded-full w-20 mb-4" />
                <div className="col-span-2 h-2.5 bg-gray-700 rounded-full w-20 mb-4" />
                <div className="hidden lg:flex lg:col-span-2 lg:h-2.5 lg:bg-gray-700 lg:rounded-full lg:w-20 lg:mb-4" />
            </div>
            <div className="mt-4">
                <div
                    className={`grid grid-cols-7 lg:grid-cols-9 gap-8 lg:gap-16 content-center align-middle font-medium text-sm pb-6 item-prueba`}>
                    <div className="col-span-1 h-[38px] w-[50px] object-cover rounded-lg bg-gray-700 mb-4" />
                    <div className="col-span-2 self-center  h-2 bg-gray-700 rounded-full w-20 mb-4" />
                    <div className="col-span-2 self-center  h-2 bg-gray-700 rounded-full w-20 mb-4" />
                    <div className="col-span-2 self-center  h-2 bg-gray-700 rounded-full w-20 mb-4" />
                    <div className="hidden lg:flex lg:col-span-2 self-center  lg:h-2 lg:bg-gray-700 lg:rounded-full lg:w-20 lg:mb-4" />
                </div>
                <div
                    className={`grid grid-cols-7 lg:grid-cols-9 gap-8 lg:gap-16 content-center align-middle font-medium text-sm pb-6 item-prueba`}>
                    <div className="col-span-1 h-[38px] w-[50px] object-cover rounded-lg bg-gray-700 mb-4" />
                    <div className="col-span-2 self-center  h-2 bg-gray-700 rounded-full w-20 mb-4" />
                    <div className="col-span-2 self-center  h-2 bg-gray-700 rounded-full w-20 mb-4" />
                    <div className="col-span-2 self-center  h-2 bg-gray-700 rounded-full w-20 mb-4" />
                    <div className="hidden lg:flex lg:col-span-2 self-center  lg:h-2 lg:bg-gray-700 lg:rounded-full lg:w-20 lg:mb-4" />
                </div>
                <div
                    className={`grid grid-cols-7 lg:grid-cols-9 gap-8 lg:gap-16 content-center align-middle font-medium text-sm pb-6 item-prueba`}>
                    <div className="col-span-1 h-[38px] w-[50px] object-cover rounded-lg bg-gray-700 mb-4" />
                    <div className="col-span-2 self-center  h-2 bg-gray-700 rounded-full w-20 mb-4" />
                    <div className="col-span-2 self-center  h-2 bg-gray-700 rounded-full w-20 mb-4" />
                    <div className="col-span-2 self-center  h-2 bg-gray-700 rounded-full w-20 mb-4" />
                    <div className="hidden lg:flex lg:col-span-2 self-center  lg:h-2 lg:bg-gray-700 lg:rounded-full lg:w-20 lg:mb-4" />
                </div>
                <div
                    className={`grid grid-cols-7 lg:grid-cols-9 gap-8 lg:gap-16 content-center align-middle font-medium text-sm pb-6 item-prueba`}>
                    <div className="col-span-1 h-[38px] w-[50px] object-cover rounded-lg bg-gray-700 mb-4" />
                    <div className="col-span-2 self-center  h-2 bg-gray-700 rounded-full w-20 mb-4" />
                    <div className="col-span-2 self-center  h-2 bg-gray-700 rounded-full w-20 mb-4" />
                    <div className="col-span-2 self-center  h-2 bg-gray-700 rounded-full w-20 mb-4" />
                    <div className="hidden lg:flex lg:col-span-2 self-center  lg:h-2 lg:bg-gray-700 lg:rounded-full lg:w-20 lg:mb-4" />
                </div>
                <div
                    className={`grid grid-cols-7 lg:grid-cols-9 gap-8 lg:gap-16 content-center align-middle font-medium text-sm pb-6 item-prueba`}>
                    <div className="col-span-1 h-[38px] w-[50px] object-cover rounded-lg bg-gray-700 mb-4" />
                    <div className="col-span-2 self-center  h-2 bg-gray-700 rounded-full w-20 mb-4" />
                    <div className="col-span-2 self-center  h-2 bg-gray-700 rounded-full w-20 mb-4" />
                    <div className="col-span-2 self-center  h-2 bg-gray-700 rounded-full w-20 mb-4" />
                    <div className="hidden lg:flex lg:col-span-2 self-center  lg:h-2 lg:bg-gray-700 lg:rounded-full lg:w-20 lg:mb-4" />
                </div>
                <div
                    className={`grid grid-cols-7 lg:grid-cols-9 gap-8 lg:gap-16 content-center align-middle font-medium text-sm pb-6 item-prueba`}>
                    <div className="col-span-1 h-[38px] w-[50px] object-cover rounded-lg bg-gray-700 mb-4" />
                    <div className="col-span-2 self-center  h-2 bg-gray-700 rounded-full w-20 mb-4" />
                    <div className="col-span-2 self-center  h-2 bg-gray-700 rounded-full w-20 mb-4" />
                    <div className="col-span-2 self-center  h-2 bg-gray-700 rounded-full w-20 mb-4" />
                    <div className="hidden lg:flex lg:col-span-2 self-center  lg:h-2 lg:bg-gray-700 lg:rounded-full lg:w-20 lg:mb-4" />
                </div>
            </div>
        </section>
    )
}