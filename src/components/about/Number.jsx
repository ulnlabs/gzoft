const Number = ({number,line}) => {
    return (
        <div className="flex flex-col gap-5 justify-center items-center">
            <div>
                <h1 className="text-5xl md:text-7xl  text-primary relative">
                   {number}
                    <span className="absolute inset-0 blur-lg text-primary opacity-100">
                       {number}
                    </span>
                </h1>
            </div>
          {line &&  <div className="w-1 h-96 bg-white/10 rounded-full"></div>}
        </div>
    )
}

export default Number;