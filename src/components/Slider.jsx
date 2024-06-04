import React from 'react';
import './Slider.css'; // Import the CSS for the slider



const List = [
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65266958d1b6be6bd4e44c51_sylvi.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65266958030e4b24786a6907_tahiliya.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/652673d679d1942e616b3675_everloom.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471d9f187d3886afcf0c_swtantra.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471d19ebc9f547ee13d1_aroka.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471ef2f2ec313a3f5557_athlos.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471e19ebc9f547ee1453_the%20whole%20truth.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471ebeab55128d85b2a8_zavya.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471ec91cc7a39f32fdd8_drip%20project.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abd73c0bc5eae6cf1aa65e_samosa%20party%20logo.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64385aabb032484e3993df3d_wow.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64385aaa30f40ffaa9438ea5_swiss%20beauty%201.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64385aaac27309c4dfd77888_pilgrim%201.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb55980929236adb436a_dlight.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb510685690c8d8b1bdc_rr%20cable.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb50ec11a19b72a44bdd_happilo.svg"
];

const Slider = () => {
  return (
    <div className="slider">
      <div className="slide-track">
        {List.map((imageUrl, index) => (
          <div key={index} className="slide">
            <img src={imageUrl} loading="eager" alt="" className="hp-client-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;


