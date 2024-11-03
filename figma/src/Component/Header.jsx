const Header = () => {
  return (
    <div className="bg-gradient-to-r from-[#86BAE380] to-[#3180BD80] pt-6 flex flex-col  items-center text-center w-[95rem] h-[14rem] ">
      <div className="mb-4 text-[#124974]">
        <h2 className="text-2xl mb-4 font-semibold">Complete Your Purchase</h2>
      </div>

      <div className="flex flex-row gap-8 text-lg font-normal">
        <p className="detail-plan text-[#124974] text-xl">
          Your plan includes:
        </p>

        <div className="flex flex-row gap-[.5rem]">
          <i class="fa-solid fa-circle-check text-[#146EB4] mt-[.4rem] w-[1.25rem] h-[1.25rem]"></i>
          <p>24/7 customer care</p>
        </div>

        <div className="flex flex-row gap-[.5rem]">
          <i class="fa-solid fa-circle-check text-[#146EB4] mt-[.4rem] w-[1.25rem] h-[1.25rem]"></i>
          <p>24/7 customer care</p>
        </div>

        <div className="flex flex-row gap-[.5rem]">
          <i class="fa-solid fa-circle-check text-[#146EB4] mt-[.4rem] w-[1.25rem] h-[1.25rem]"></i>
          <p>24/7 customer care</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
