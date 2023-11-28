function Productivity() {
  return (
    <div>
      <div className="card w-full bg-my-custom-color text-neutral-content text-xs">
        <label
          className=" bg-[#1A2C2C99] p-3 rounded-xl text-center"
          htmlFor=""
        >
          Employee Productivity Dashboard
        </label>
        <div className="card-body">
          <div className="flex justify-between  p-1">
            <div className="w-4/5">
              <label htmlFor="">Productivity on Monday</label>
              <div className="w-full">
                <div className=" bg-[#36A54680] border-[#36A546] border-2 rounded-xl w-[10%] h-3"></div>
              </div>
            </div>
            <div>
              <p className=" text-[#36A546]">10%</p>
            </div>
          </div>
          <div className="flex justify-between  p-1">
            <div className="w-4/5">
              <label htmlFor="">Productivity on Tuesday</label>
              <div className="w-full">
                <div className=" bg-[#36A54680] border-[#36A546] border-2 rounded-xl w-[80%] h-3"></div>
              </div>
            </div>
            <div>
              <p className=" text-[#36A546]">80%</p>
            </div>
          </div>
          <div className="flex justify-between  p-1">
            <div className="w-4/5">
              <label htmlFor="">Productivity on Wednesday</label>
              <div className="w-full">
                <div className=" bg-[#36A54680] border-[#36A546] border-2 rounded-xl w-[50%] h-3"></div>
              </div>
            </div>
            <div>
              <p className=" text-[#36A546]">50%</p>
            </div>
          </div>
          <div className="flex justify-between  p-1">
            <div className="w-4/5">
              <label htmlFor="">Productivity on Thursday</label>
              <div className="w-full">
                <div className=" bg-[#36A54680] border-[#36A546] border-2 rounded-xl w-[30%] h-3"></div>
              </div>
            </div>
            <div>
              <p className=" text-[#36A546]">30%</p>
            </div>
          </div>
          <div className="flex justify-between  p-1">
            <div className="w-4/5">
              <label htmlFor="">Productivity on Friday</label>
              <div className="w-full">
                <div className=" bg-[#36A54680] border-[#36A546] border-2 rounded-xl w-[70%] h-3"></div>
              </div>
            </div>
            <div>
              <p className=" text-[#36A546]">70%</p>
            </div>
          </div>
          <div className="flex justify-between  p-1">
            <div className="w-4/5">
              <label htmlFor="">Productivity on Saturday</label>
              <div className="w-full">
                <div className=" bg-[#36A54680] border-[#36A546] border-2 rounded-xl w-[100%] h-3"></div>
              </div>
            </div>
            <div>
              <p className=" text-[#36A546]">100%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productivity;
