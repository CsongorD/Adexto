import { Mail, MapPin, Phone } from "lucide-react";

const ContactCard = () => {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="card p-4 sm:p-6 lg:p-8">
        <h2 className="mb-4 text-xl font-bold text-primary-800 sm:mb-6 sm:text-2xl">
          Company Name
        </h2>

        <div className="space-y-3 text-primary-700 sm:space-y-4">
          <div className="flex items-start space-x-3">
            <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-primary-500 sm:h-5 sm:w-5" />
            <p className="text-sm sm:text-base">Company Location</p>
          </div>

          <div className="flex items-start space-x-3">
            <Phone className="mt-1 h-4 w-4 flex-shrink-0 text-primary-500 sm:h-5 sm:w-5" />
            <div>
              <p className="text-sm sm:text-base">
                Tel:{" "}
                <a
                  href="tel:+381668822339"
                  className="font-bold text-primary-800 transition-colors duration-300 hover:text-primary-900"
                >
                  Company Phone Number
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Mail className="mt-1 h-4 w-4 flex-shrink-0 text-primary-500 sm:h-5 sm:w-5" />
            <div>
              <p className="text-sm sm:text-base">
                Email:{" "}
                <a
                  href="mailto:info@adexto.com"
                  className="font-bold text-primary-800 transition-colors duration-300 hover:text-primary-900"
                >
                  company@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-1 border-t border-primary-200 pt-3 sm:space-y-2 sm:pt-4">
            <p className="text-sm sm:text-base">
              <span className="font-medium">Company Number:</span> company
              number
            </p>
            <p className="text-sm sm:text-base">
              <span className="font-medium">Tax number:</span> company tax
              number
            </p>
          </div>
        </div>
      </div>

      <div className="card p-4 sm:p-6 lg:p-8">
        <h3 className="mb-3 text-lg font-bold text-primary-800 sm:mb-4 sm:text-xl">
          RADNO VREME
        </h3>

        <div className="space-y-2 text-primary-700 sm:space-y-3">
          <div className="flex flex-col space-y-1 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
            <span className="text-sm sm:text-base">Ponedeljak - Petak:</span>
            <span className="text-sm font-medium text-primary-600 sm:text-base">
              07:00 - 15:00
            </span>
          </div>
          <div className="flex flex-col space-y-1 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
            <span className="text-sm sm:text-base">
              Subota, nedelja i praznici:
            </span>
            <span className="text-sm font-medium text-primary-800 sm:text-base">
              po dogovoru
            </span>
          </div>
        </div>

        <div className="mt-4 rounded-lg border border-yellow-200 bg-yellow-50 p-3 sm:mt-6 sm:p-4">
          <p className="text-sm text-yellow-800">
            Molimo Vas da zovete samo tokom našeg radnog vremena.
          </p>
        </div>
      </div>

      <div className="card p-4 sm:p-6 lg:p-8">
        <h3 className="mb-3 text-lg font-bold text-primary-800 sm:mb-4 sm:text-xl">
          KAKO DO NAS
        </h3>

        <p className="text-sm leading-relaxed text-primary-700 sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default ContactCard;
