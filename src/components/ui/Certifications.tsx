import { CertificatesList } from "../../data/data";
import { CertificateItem } from "../../types/types";

const Certifications = () => {
  return CertificatesList.map((item: CertificateItem) => (
    <div key={item.id}>
      <a href={item.url} target="_blank" rel="noreferrer">
        <img src={item.image} alt={item.name} className="w-32" />
      </a>
    </div>
  ));
};

export default Certifications;
