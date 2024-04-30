import AffordableHousing from "./components/AffordableHousing";
import Buy from "./components/Buy";
import GoldTokenization from "./components/GoldTokenization";
import Hero from "./components/Hero";
import HousingAsAService from "./components/HousingAsAService";
import NewDevelopment from "./components/NewDevelopment";
import Rent2Own from "./components/Rent2Own";
import PropertyNFT from "./components/PropertyNFT";
import SecuritiesToken from "./components/SecuritiesToken";

export default function Home() {
  return (
    <main>
      <Hero />
      <HousingAsAService />
      <AffordableHousing />
      <Rent2Own />
      <NewDevelopment />
      <Buy />
      <GoldTokenization />
      <PropertyNFT />
      <SecuritiesToken />
    </main>
  );
}
