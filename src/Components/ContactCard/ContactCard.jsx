import "./ContactCard.css";

const ContactCard = () => {
  return (
    <div className="contact-card">
      <div className="contact-info">
        <h2 className="card-title">ADEXTO DOO</h2>
        <p></p>
        <p>Servo Mihalja BB, 23206 Zrenjanin (Mužlja)</p>
        <p>Tel broj: +381 66 8822 339</p>
        <p>E-mail: info@adexto.com </p>
        <p>Matični broj: 20289635</p>
        <p>PIB: 105002449 </p>
      </div>
      <div className="open-hours">
        <h2 className="card-title">RADNO VREME!</h2>
        <p>Od ponedeljka do petka: 07:00 – 15:00</p>
        <p>Subotom, nedeljom i praznicima: po dogovoru.</p>
        <br />
        <p>Molimo Vas samo tokom našeg radnog vremena zovite.</p>
      </div>
      <div className="additional-info">
        <h2 className="card-title">PRAVAC!</h2>
        <p>
          Krenite prema Mužlji iz Zrenjanina, kod Gomexa krenite desno u ulicu
          Servo Mihalja. Vozite 2.5 km dok ne vidite žuti objekat sa leve
          strane.
        </p>
      </div>
    </div>
  );
};

export default ContactCard;
