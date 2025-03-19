import React, { useState } from "react";
import Select from "react-select";
import countries from "world-countries";

// Format country data
const formattedCountries = countries.map((country) => ({
    label: country.name.common,
    value: country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : ""),
    flag: `https://flagcdn.com/w40/${country.cca2.toLowerCase()}.png`,
    code: country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : ""),
}));

const customStyles = {
    control: (provided) => ({
        ...provided,
        minWidth: "110px", // Adjust width of dropdown
        maxWidth: "140px",
        display: "flex",
    }),
    menu: (provided) => ({
        ...provided,
        width: "250px", // Set dropdown width
    }),
    singleValue: (provided) => ({
        ...provided,
        display: "flex",
        alignItems: "center",
    }),
};

const CountryCode = () => {
    const [selectedCountry, setSelectedCountry] = useState(formattedCountries[0]);
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend custom-country-code-wrapper" style={{ minWidth: "110px" }}>
                <Select
                    options={formattedCountries}
                    value={selectedCountry}
                    onChange={setSelectedCountry}
                    getOptionLabel={(e) => `${e.label}`} // Ensure correct search functionality
                    formatOptionLabel={(e) => ( // Show flags & code in dropdown options
                        <div className="d-flex align-items-center">
                            <img src={e.flag} alt={e.label} className="me-2" width="20" />
                            {e.label} ({e.code})
                        </div>
                    )}
                    components={{
                        SingleValue: ({ data }) => ( // Show only flag & code when selected
                            <div className="d-flex align-items-center">
                                <img src={data.flag} alt={data.label} className="me-2" width="20" />
                                {data.code}
                            </div>
                        ),
                    }}
                    styles={customStyles} // Apply custom styles
                    placeholder="Select country..."
                    menuPortalTarget={document.body} // Fix dropdown positioning issues
                    className="w-100"
                />
            </div>
            <input type="text" className="form-control" placeholder="Enter phone number" />
        </div>
    )
}

export default CountryCode
