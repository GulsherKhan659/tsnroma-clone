import React from "react";
import { Table } from "react-bootstrap";

const TnsTable = () => {
  return (
    <div>
        <Table responsive>
      <thead>
        <tr>
          <th></th>
          <th>BRONZE</th>
          <th>SILVER</th>
          <th>GOLD</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Iscrizione / Rinnovo T.S.N.</td>
          <td>€45,00</td>
          <td>€45,00</td>
          <td>€45,00</td>
        </tr>
        <tr>
          <td>Tesseramento UITS</td>
          <td>€30,00</td>
          <td>€30,00</td>
          <td>€30,00</td>
        </tr>
        <tr>
          <td>Quota Pacchetto</td>
          <td>€20,00</td>
          <td>€20,00</td>
          <td>€20,00</td>
        </tr>
        <tr>
          <td>Buono All. Annuale</td>
          <td>No</td>
          <td>10m*</td>
          <td>10m* 25m 50m</td>
        </tr>
        <tr>
          <td>Utilizzo impianti</td>
          <td>Da Mar a Dom</td>
          <td>Da Mar a Dom</td>
          <td>Da Mar a Dom</td>
        </tr>
        <tr>
          <td>Parcheggio</td>
          <td>Si</td>
          <td>Si</td>
          <td>Si</td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
};

export default TnsTable;
