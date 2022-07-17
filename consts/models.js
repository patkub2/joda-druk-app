import {
  A4Kolor,
  A4Mono,
  A3Kolor,
  A3Mono,
  A2,
  A1,
  A0,
  B1,
  B2,
  BindowanieDrutowe,
  BindowaniePlastikowe,
  BindowanieTermobindowe,
  Oprawa,
  Laminowanie,
  Dodatkowo,
} from "./data.js";

export const MaloForm =
  `
<h2>Wydruk czarno-biały</h2>
<table class="tg">
<thead>
  <tr>
    <th class="tg-0pky"></th>
    <th class="tg-0pky">A4</th>
    <th class="tg-0pky">A3</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">` +
  Object.keys(A4Mono)[0] +
  `</td>
    <td class="tg-0pky">` +
  A4Mono["1-50 szt"] +
  ` zł</td>
    <td class="tg-0pky">` +
  A3Mono["1-50 szt"] +
  ` zł</td>
  </tr>
  <tr>
    <td class="tg-0pky">` +
  Object.keys(A4Mono)[1] +
  `</td>
    <td class="tg-0pky">` +
  A4Mono["51-100 szt"] +
  ` zł</td></td>
    <td class="tg-0pky">` +
  A3Mono["51-100 szt"] +
  ` zł</td></td>
  </tr>
  <tr>
    <td class="tg-0pky">` +
  Object.keys(A4Mono)[2] +
  `</td>
    <td class="tg-0pky">` +
  A4Mono["101-300 szt"] +
  ` zł</td></td>
    <td class="tg-0pky">` +
  A3Mono["101-300 szt"] +
  ` zł</td></td>
  </tr>
  <tr>
    <td class="tg-0pky">` +
  Object.keys(A4Mono)[3] +
  `</td>
    <td class="tg-0pky">` +
  A4Mono[">300 szt"] +
  ` zł</td></td>
    <td class="tg-0pky">` +
  A3Mono[">300 szt"] +
  ` zł</td></td>
  </tr>
</tbody>
</table>
<h2>Wydruk kolorowy</h2>
<table class="tg">
<thead>
  <tr>
    <th class="tg-0pky"></th>
    <th class="tg-0pky">A4</th>
    <th class="tg-0pky">A3</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">` +
  Object.keys(A4Kolor)[0] +
  `</td>
    <td class="tg-0pky">` +
  A4Kolor["1-30 szt"] +
  ` zł</td>
    <td class="tg-0pky">` +
  A3Kolor["1-30 szt"] +
  ` zł</td>
  </tr>
  <tr>
    <td class="tg-0pky">` +
  Object.keys(A4Kolor)[1] +
  `</td>
    <td class="tg-0pky">` +
  A4Kolor["31-100 szt"] +
  ` zł</td></td>
    <td class="tg-0pky">` +
  A3Kolor["31-100 szt"] +
  ` zł</td></td>
  </tr>
  <tr>
    <td class="tg-0pky">` +
  Object.keys(A4Kolor)[2] +
  `</td>
    <td class="tg-0pky">` +
  A4Kolor["101-200 szt"] +
  ` zł</td></td>
    <td class="tg-0pky">` +
  A3Kolor["101-200 szt"] +
  ` zł</td></td>
  </tr>
  <tr>
    <td class="tg-0pky">` +
  Object.keys(A4Kolor)[3] +
  `</td>
    <td class="tg-0pky">` +
  A4Kolor[">200 szt"] +
  ` zł</td></td>
    <td class="tg-0pky">` +
  A3Kolor[">200 szt"] +
  ` zł</td></td>
  </tr>
</tbody>
</table>`;

export const WielkoForm =
  `
<h2>Wydruki wielkoformatowe<h2>
<table class="tg">
<thead>
  <tr>
    <th class="tg-0pky"></th>
    <th class="tg-0pky">` +
  Object.keys(A2)[0] +
  `</th>
    <th class="tg-0pky">` +
  Object.keys(A2)[1] +
  `</th>
    <th class="tg-0pky">` +
  Object.keys(A2)[2] +
  `</th>
    <th class="tg-0pky">` +
  Object.keys(A2)[3] +
  `</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">A2</td>
    <td class="tg-0pky">` +
  A2["<20%"] +
  ` zł</td>
    <td class="tg-0pky">` +
  A2["21-70%"] +
  ` zł</td>
    <td class="tg-0pky">` +
  A2[">70%"] +
  ` zł</td>
    <td class="tg-0pky">` +
  A2.składanie +
  ` zł</td>
  </tr>
  <tr>
    <td class="tg-0pky">A1</td>
    <td class="tg-0pky">` +
  A1["<20%"] +
  ` zł</td>
    <td class="tg-0pky">` +
  A1["21-70%"] +
  ` zł</td>
    <td class="tg-0pky">` +
  A1[">70%"] +
  ` zł</td>
    <td class="tg-0pky">` +
  A1.składanie +
  ` zł</td>
  </tr>
  <tr>
    <td class="tg-0pky">A0</td>
    <td class="tg-0pky">` +
  A0["<20%"] +
  ` zł</td>
    <td class="tg-0pky">` +
  A0["21-70%"] +
  ` zł</td>
    <td class="tg-0pky">` +
  A0[">70%"] +
  ` zł</td>
    <td class="tg-0pky">` +
  A0.składanie +
  ` zł</td>
  </tr>
  <tr>
    <td class="tg-0pky">B2</td>
    <td class="tg-0pky">` +
  B2["<20%"] +
  ` zł</td>
    <td class="tg-0pky">` +
  B2["21-70%"] +
  ` zł</td>
    <td class="tg-0pky">` +
  B2[">70%"] +
  ` zł</td>
    <td class="tg-0pky">` +
  B2.składanie +
  ` zł</td>
  </tr>
  <tr>
    <td class="tg-0pky">B1</td>
    <td class="tg-0pky">` +
  B1["<20%"] +
  ` zł</td>
    <td class="tg-0pky">` +
  B1["21-70%"] +
  ` zł</td>
    <td class="tg-0pky">` +
  B1[">70%"] +
  ` zł</td>
    <td class="tg-0pky">` +
  B1.składanie +
  ` zł</td>
  </tr>
</tbody>
</table>`;

export const Bind =
  `<h2>Bindowanie plastikowe<h2>
<table class="tg">
<tr>
  <td class="double">` +
  Object.keys(BindowaniePlastikowe)[0] +
  `</th>
  <td class="double">` +
  BindowaniePlastikowe["1-50 szt"] +
  ` zł</th>
</tr>

<tr>
  <td class="double">` +
  Object.keys(BindowaniePlastikowe)[1] +
  `</td>
  <td class="double">` +
  BindowaniePlastikowe["51-100 szt"] +
  ` zł</td>
</tr>
<tr>
  <td class="double">` +
  Object.keys(BindowaniePlastikowe)[2] +
  `</td>
  <td class="double">` +
  BindowaniePlastikowe["151-250 szt"] +
  ` zł</td>
</tr>
<tr>
  <td class="double">` +
  Object.keys(BindowaniePlastikowe)[3] +
  `</td>
  <td class="double">` +
  BindowaniePlastikowe[">250 szt"] +
  ` zł</td>
</tr>
<tr>
  <td class="double">` +
  Object.keys(BindowaniePlastikowe)[4] +
  `</td>
  <td class="double">` +
  BindowaniePlastikowe["ponowna oprawa"] +
  ` zł</td>
</tr>

</table>
<h2>Bindowanie drutowe<h2>
<table class="tg">
<tr>
  <td class="double">` +
  Object.keys(BindowanieDrutowe)[0] +
  `</th>
  <td class="double">` +
  BindowanieDrutowe["1-40 szt"] +
  ` zł</th>
</tr>

<tr>
  <td class="double">` +
  Object.keys(BindowanieDrutowe)[1] +
  `</td>
  <td class="double">` +
  BindowanieDrutowe["41-80 szt"] +
  ` zł</td>
</tr>
<tr>
  <td class="double">` +
  Object.keys(BindowanieDrutowe)[2] +
  `</td>
  <td class="double">` +
  BindowanieDrutowe["81-120 szt"] +
  ` zł</td>
</tr>

<tr>
  <td class="double">` +
  Object.keys(BindowanieDrutowe)[3] +
  `</td>
  <td class="double">` +
  BindowanieDrutowe["ponowna oprawa"] +
  ` zł</td>
</tr>

</table>

<h2>Termobindowanie<h2>
<table class="tg">

<tr>
  <td class="double">` +
  Object.keys(BindowanieTermobindowe)[0] +
  `</td>
  <td class="double">` +
  BindowanieTermobindowe["1-150 szt"] +
  ` zł</td>
</tr>
<tr>
  <td class="double">` +
  Object.keys(BindowanieTermobindowe)[1] +
  `</td>
  <td class="double">` +
  BindowanieTermobindowe["151-300 szt"] +
  ` zł</td>
</tr>


</table>

<table class="tg">
  <h2>Oprawy prac
  dyplomowych </h2>
<tr>
  <td class="double">` +
  Object.keys(Oprawa)[0] +
  `</th>
  <td class="double">` +
  Oprawa["oprawa twarda"] +
  ` zł</th>
</tr>

<tr>
  <td class="double">` +
  Object.keys(Oprawa)[1] +
  `</td>
  <td class="double">` +
  Oprawa["oprawa miękka"] +
  ` zł</td>
</tr>
<tr>
  <td class="double">` +
  Object.keys(Oprawa)[2] +
  `</td>
  <td class="double">` +
  Oprawa["ponowna oprawa"] +
  ` zł</td>
</tr>

</table>`;
export const Dypl =
  `

<table class="tg">
  <h2>Laminowanie</h2>
<tr>
  <td class="double">` +
  Object.keys(Laminowanie)[0] +
  `</th>
  <td class="double">` +
  Laminowanie.A4 +
  ` zł</th>
</tr>

<tr>
  <td class="double">` +
  Object.keys(Laminowanie)[1] +
  `</td>
  <td class="double">` +
  Laminowanie.A3 +
  ` zł</td>
</tr>


</table>

<table class="tg">
  <h2>Dodatkowo</h2>
<tr>
  <td class="double">` +
  Object.keys(Dodatkowo)[0] +
  `</th>
  <td class="double">` +
  Dodatkowo["Zapis z CAD"] +
  ` zł</th>
</tr>

<tr>
  <td class="double">` +
  Object.keys(Dodatkowo)[1] +
  `</td>
  <td class="double">` +
  Dodatkowo["Edycja tekst/rysunek"] +
  ` zł</td>
</tr>

<tr>
  <td class="double">` +
  Object.keys(Dodatkowo)[2] +
  `</td>
  <td class="double">` +
  Dodatkowo["Nagranie CD"] +
  ` zł</td>
</tr>


</table>`;
