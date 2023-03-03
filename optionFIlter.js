import React, { useEffect, useState } from 'react';
import IconPlane from '@/components/ui/icon/general-ui/iconPlane';
import IconArrowDown from '@/components/ui/icon/general-ui/iconArrowDown';
import GeneralButton from '@/components/ui/Buttons/GeneralButton/GeneralButton';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import { useWindowSize } from 'react-use';
import { aircraftdata } from '../../../../pages/json/data.json';

interface IAirCraft {
  make: string;
  model: string;
  YearSerialNumber: string;
  mainwheelassembly: string;
  conversion: string;
  breakassembly: string;
  footnote: string;
  footnotesecondary: string;
}

interface IButtonEvent {}

export interface FindByAircraftV2Props {
  data: IAirCraft[];
}

const FindByAircraftV2: React.FC<FindByAircraftV2Props> = () => {
  const { width } = useWindowSize();
  const [dropdownOpen, cycleDropdownOpen] = useCycle(
    width < 1024 ? false : true,
    width < 1024 ? true : true,
  );

  const [airCraftData, setAirCraftData] = useState<Array<IAirCraft>>([]);
  const [filteredData, setFilteredData] = useState<Array<IAirCraft>>([]);

  const [makeOptions, setMakeOptions] = useState<Array<string>>([]);
  const [modelOptions, setModelOptions] = useState<Array<string>>([]);
  const [yearOptions, setYearOptions] = useState<Array<string>>([]);

  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const [isModelActive, setIsModelActive] = useState(true);
  const [isYearActive, setIsYearActive] = useState(true);
  const [isButtonActive, setIsButtonActive] = useState(true);

  useEffect(() => {
    setAirCraftData(aircraftdata as IAirCraft[]);
    const allMakeValues: string[] = [];
    for (const item of aircraftdata) {
      const isRepeated = allMakeValues.find(
        (existingItem) => existingItem === item.make,
      );
      if (!isRepeated) {
        allMakeValues.push(item.make);
      }
    }
    setMakeOptions(allMakeValues);
  }, []);

  // const { make, model } = aircraftdata;
  const onAircraftMakeChange = (e) => {
    const selectedMakeOption = e.target.value;
    setSelectedMake(selectedMakeOption);

    const filteredList = airCraftData.filter(
      (aircraftItem) => aircraftItem.make === selectedMakeOption,
    );
    const allModelsByMake = filteredList.map((item) => item.model);
    setModelOptions(allModelsByMake);

    // Reset year options unitl the model is selected.
    setYearOptions([]);

    setSelectedModel('');
    setSelectedYear('');
    setIsModelActive(false);
  };

  const onAircraftModelChange = (event: React.FormEvent<HTMLInputElement>) => {
    const selectedModelOption = (event.target as HTMLInputElement).value;
    setSelectedModel(selectedModelOption);
    const filteredList = airCraftData.filter(
      (aircraftItem) => aircraftItem.model === selectedModelOption,
    );
    const allYearsByModel = filteredList.map((item) => item.YearSerialNumber);
    setYearOptions(allYearsByModel);
    setSelectedYear('');
    setIsYearActive(false);
  };

  const onAircraftYearChange = (event: React.FormEvent<HTMLInputElement>) => {
    const selectedYearOption = (event.target as HTMLInputElement).value;
    setSelectedYear(selectedYearOption);
    setIsButtonActive(false);
  };

  // go button click function to get selected data
  const aircraftFilter = (event?: React.MouseEvent<HTMLElement>) => {
    event && event.preventDefault();
    const filteredList = airCraftData.filter((airCraftItem) => {
      return (
        airCraftItem.make === selectedMake &&
        airCraftItem.model === selectedModel &&
        airCraftItem.YearSerialNumber === selectedYear
      );
    });
    console.log(filteredList, ":::: filteredList")
    setFilteredData(filteredList);
  };

  // Open and close the dropdown based on viewport width
  useEffect(() => {
    if (width < 1024) {
      cycleDropdownOpen(0);
    } else {
      cycleDropdownOpen(1);
    }
  }, [width, cycleDropdownOpen]);

  return (
    <section className="relative flex w-full font-bold text-white uppercase text-xxs sm:text-xs font-heading bg-k-grey-900">
      <div className="flex flex-col w-full">
        {/* Toggle Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            cycleDropdownOpen();
          }}
          className="w-full uppercase transition-colors duration-300 group bg-k-grey-900 hover:bg-k-green-400 lg:hidden"
        >
          <div className="flex items-center justify-center py-4 text-center container-max">
            {/* Plane Icon */}
            <span className="relative w-5 transition-colors duration-300 rotate-45 sm:w-6 fill-k-green-400 group-hover:fill-k-grey-900">
              <IconPlane />
            </span>

            {/* Text */}
            <span className="relative top-px sm:top-0.5 transition-colors duration-300 group-hover:text-k-grey-900 ml-[6px]">
              Find By Aircraft
            </span>

            {/* External Link Icon */}
            <motion.span
              animate={{
                rotate: dropdownOpen ? 180 : 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="w-2 ml-2 transition-colors duration-300 fill-k-green-400 group-hover:fill-k-grey-900"
            >
              <IconArrowDown />
            </motion.span>
          </div>
        </button>

        {/* Form */}
        <AnimatePresence initial={false}>
          {dropdownOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  display: 'flex',
                  height: 'auto',
                  transition: {
                    type: 'tween',
                    duration: 0.5,
                    ease: 'easeOut',
                  },
                },
                closed: {
                  height: '0',
                  transition: {
                    type: 'tween',
                    duration: 0.5,
                    ease: 'easeOut',
                  },
                  transitionEnd: { display: 'none' },
                },
              }}
            >
              <form
                className="flex flex-col items-stretch text-center lg:items-center lg:flex-row py-7 container-max gap-7"
                aria-label="Find By Aircraft"
              >
                {/* Heading */}
                <div className="items-center justify-center hidden py-4 text-center uppercase flex-0 lg:flex">
                  <span className="relative w-6 rotate-45 fill-k-green-400">
                    <IconPlane />
                  </span>
                  <h2 className="relative top-px ml-[6px]">Find by aircraft</h2>
                </div>

                {/* Make */}
                <div className="relative flex-1 h-full group lg:min-h-[40px]">
                  <select
                    onChange={onAircraftMakeChange}
                    className="block w-full h-full px-4 py-3 pr-8 leading-tight transition-colors border-2 rounded appearance-none hover:border-k-green-500 
                    text-k-grey-900 font-body focus:outline-none uppercase"
                    value={selectedMake}
                  >
                    <option value="" disabled>
                      Make
                    </option>
                    {makeOptions.map((option, i) => {
                      return (
                        <option key={`option-${i}`} value={option}>
                          {option}
                        </option>
                      );
                    })}
                  </select>

                  {/*Icon */}
                  <div className="absolute top-0 bottom-0 flex items-center w-2 my-auto pointer-events-none right-4">
                    <div className="w-2 transition-colors fill-k-grey-900 group-hover:fill-k-green-700">
                      <IconArrowDown />
                    </div>
                  </div>
                </div>

                {/* Model */}
                <div className="relative flex-1 h-full group lg:min-h-[40px]">
                  <select
                    onChange={onAircraftModelChange}
                    className="block w-full h-full px-4 py-3 pr-8 leading-tight transition-colors border-2 rounded appearance-none hover:border-k-green-500 text-k-grey-900 font-body focus:outline-none"
                    value={selectedModel}
                    disabled={isModelActive}
                  >
                    <option value="">Model</option>
                    {modelOptions.map((option, i) => {
                      return (
                        <option key={`option2-${i}`} value={option}>
                          {option}
                        </option>
                      );
                    })}
                  </select>

                  {/*Icon */}
                  <div className="absolute top-0 bottom-0 flex items-center w-2 my-auto pointer-events-none right-4">
                    <div className="w-2 transition-colors fill-k-grey-900 group-hover:fill-k-green-700">
                      <IconArrowDown />
                    </div>
                  </div>
                </div>

                {/* Year/Serial Number */}
                <div className="relative flex-1 h-full group lg:min-h-[40px]">
                  <select
                    onChange={onAircraftYearChange}
                    className="block w-full h-full px-4 py-3 pr-8 leading-tight transition-colors border-2 rounded appearance-none hover:border-k-green-500 text-k-grey-900 font-body focus:outline-none"
                    value={selectedYear}
                    disabled={isYearActive}
                  >
                    <option value="" disabled>
                      Year/Serial Number
                    </option>
                    {yearOptions.map((option, i) => (
                      <option key={`option3-${i}`} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>

                  {/*Icon */}
                  <div className="absolute top-0 bottom-0 flex items-center w-2 my-auto pointer-events-none right-4">
                    <div className="w-2 transition-colors fill-k-grey-900 group-hover:fill-k-green-700">
                      <IconArrowDown />
                    </div>
                  </div>
                </div>

                {/* Button */}
                <div
                  className={`relative dark ${
                    isButtonActive
                      ? 'before:absolute before:w-[94px] before:h-[54px] before:left-[-4px] before:top-[-4px] before:z-30'
                      : ''
                  }`}
                >
                  <GeneralButton
                    type="button"
                    onClick={aircraftFilter}
                    text="Go"
                  />
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FindByAircraftV2;
