const Score = () => {
    return (
      <div className="flex items-center justify-center gap-2 text-center text-3xl font-bold">
        {/* TODO: implement logic of displaying scores */}
        <p>0</p>
        <p>0</p>
        <p>0</p>
        <p>0</p>
        <p>0</p>
        <button
          onClick={() => {
            // TODO: implement logic of resetting scores
          }}
          className="flex h-fit w-fit items-center justify-center rounded-2xl p-4 text-center text-2xl"
        >
          <i className="icon-[mdi--trash]"></i>
        </button>
      </div>
    );
  };
  
  export default Score;
