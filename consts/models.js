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
} from "./data.js";

export const MaloForm =
  `
<h2>wydruk czarno-biały</h2>
<table class="tg">
<thead>
  <tr>
    <th class="tg-0pky"></th>
    <th class="tg-0pky">A4</th>
    <th class="tg-0lax">A3</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">` +
  Object.keys(A4Mono)[0] +
  `</td>
    <td class="tg-0pky">` +
  A4Mono["1-50 szt."] +
  ` zł</td>
    <td class="tg-0lax">` +
  A3Mono["1-50 szt."] +
  ` zł</td>
  </tr>
  <tr>
    <td class="tg-0pky">` +
  Object.keys(A4Mono)[1] +
  `</td>
    <td class="tg-0pky">` +
  A4Mono["51-100 szt."] +
  ` zł</td></td>
    <td class="tg-0lax">` +
  A3Mono["51-100 szt."] +
  ` zł</td></td>
  </tr>
  <tr>
    <td class="tg-0lax">` +
  Object.keys(A4Mono)[2] +
  `</td>
    <td class="tg-0lax">` +
  A4Mono["101-300 szt."] +
  ` zł</td></td>
    <td class="tg-0lax">` +
  A3Mono["101-300 szt."] +
  ` zł</td></td>
  </tr>
  <tr>
    <td class="tg-0lax">` +
  Object.keys(A4Mono)[3] +
  `</td>
    <td class="tg-0lax">` +
  A4Mono[">300 szt."] +
  ` zł</td></td>
    <td class="tg-0lax">` +
  A3Mono[">300 szt."] +
  ` zł</td></td>
  </tr>
</tbody>
</table>
<h2>wydruk kolorowy</h2>
<table class="tg">
<thead>
  <tr>
    <th class="tg-0pky"></th>
    <th class="tg-0pky">A4</th>
    <th class="tg-0lax">A3</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">` +
  Object.keys(A4Kolor)[0] +
  `</td>
    <td class="tg-0pky">` +
  A4Kolor["1-50 szt."] +
  ` zł</td>
    <td class="tg-0lax">` +
  A3Kolor["1-50 szt."] +
  ` zł</td>
  </tr>
  <tr>
    <td class="tg-0pky">` +
  Object.keys(A4Kolor)[1] +
  `</td>
    <td class="tg-0pky">` +
  A4Kolor["51-100 szt."] +
  ` zł</td></td>
    <td class="tg-0lax">` +
  A3Kolor["51-100 szt."] +
  ` zł</td></td>
  </tr>
  <tr>
    <td class="tg-0lax">` +
  Object.keys(A4Kolor)[2] +
  `</td>
    <td class="tg-0lax">` +
  A4Kolor["101-300 szt."] +
  ` zł</td></td>
    <td class="tg-0lax">` +
  A3Kolor["101-300 szt."] +
  ` zł</td></td>
  </tr>
  <tr>
    <td class="tg-0lax">` +
  Object.keys(A4Kolor)[3] +
  `</td>
    <td class="tg-0lax">` +
  A4Kolor[">300 szt."] +
  ` zł</td></td>
    <td class="tg-0lax">` +
  A3Kolor[">300 szt."] +
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
  `<h2>bindowanie plastikowe<h2>
<table class="tg">
<tr>
  <td class="tg-0pky">` +
  Object.keys(BindowaniePlastikowe)[0] +
  `</th>
  <td class="tg-0pky">` +
  BindowaniePlastikowe["1-50 szt"] +
  ` zł</th>
</tr>

<tr>
  <td class="tg-0pky">` +
  Object.keys(BindowaniePlastikowe)[1] +
  `</td>
  <td class="tg-0pky">` +
  BindowaniePlastikowe["51-100 szt."] +
  ` zł</td>
</tr>
<tr>
  <td class="tg-0pky">` +
  Object.keys(BindowaniePlastikowe)[2] +
  `</td>
  <td class="tg-0pky">` +
  BindowaniePlastikowe["151-250 szt."] +
  ` zł</td>
</tr>
<tr>
  <td class="tg-0pky">` +
  Object.keys(BindowaniePlastikowe)[3] +
  `</td>
  <td class="tg-0pky">` +
  BindowaniePlastikowe[">250 szt"] +
  ` zł</td>
</tr>
<tr>
  <td class="tg-0pky">` +
  Object.keys(BindowaniePlastikowe)[4] +
  `</td>
  <td class="tg-0pky">` +
  BindowaniePlastikowe["ponowna oprawa"] +
  ` zł</td>
</tr>

</table>
<h2>bindowanie drutowe<h2>
<table class="tg">
<tr>
  <td class="tg-0pky">` +
  Object.keys(BindowanieDrutowe)[0] +
  `</th>
  <td class="tg-0pky">` +
  BindowanieDrutowe["1-50 szt"] +
  ` zł</th>
</tr>

<tr>
  <td class="tg-0pky">` +
  Object.keys(BindowanieDrutowe)[1] +
  `</td>
  <td class="tg-0pky">` +
  BindowanieDrutowe["51-100 szt."] +
  ` zł</td>
</tr>
<tr>
  <td class="tg-0pky">` +
  Object.keys(BindowanieDrutowe)[2] +
  `</td>
  <td class="tg-0pky">` +
  BindowanieDrutowe["151-250 szt."] +
  ` zł</td>
</tr>
<tr>
  <td class="tg-0pky">` +
  Object.keys(BindowanieDrutowe)[3] +
  `</td>
  <td class="tg-0pky">` +
  BindowanieDrutowe[">250 szt"] +
  ` zł</td>
</tr>
<tr>
  <td class="tg-0pky">` +
  Object.keys(BindowanieDrutowe)[4] +
  `</td>
  <td class="tg-0pky">` +
  BindowanieDrutowe["ponowna oprawa"] +
  ` zł</td>
</tr>

</table>

<h2>termobindowanie<h2>
<table class="tg">
<tr>
  <td class="tg-0pky">` +
  Object.keys(BindowanieTermobindowe)[0] +
  `</th>
  <td class="tg-0pky">` +
  BindowanieTermobindowe["1-50 szt"] +
  ` zł</th>
</tr>

<tr>
  <td class="tg-0pky">` +
  Object.keys(BindowanieTermobindowe)[1] +
  `</td>
  <td class="tg-0pky">` +
  BindowanieTermobindowe["51-100 szt."] +
  ` zł</td>
</tr>
<tr>
  <td class="tg-0pky">` +
  Object.keys(BindowanieTermobindowe)[2] +
  `</td>
  <td class="tg-0pky">` +
  BindowanieTermobindowe["151-250 szt."] +
  ` zł</td>
</tr>
<tr>
  <td class="tg-0pky">` +
  Object.keys(BindowanieTermobindowe)[3] +
  `</td>
  <td class="tg-0pky">` +
  BindowanieTermobindowe[">250 szt"] +
  ` zł</td>
</tr>
<tr>
  <td class="tg-0pky">` +
  Object.keys(BindowanieTermobindowe)[4] +
  `</td>
  <td class="tg-0pky">` +
  BindowanieTermobindowe["ponowna oprawa"] +
  ` zł</td>
</tr>

</table>`;
export const Dypl =
  `<table class="tg">
  
<tr>
  <td class="tg-0pky">` +
  Object.keys(BindowanieTermobindowe)[0] +
  `</th>
  <td class="tg-0pky">` +
  Oprawa["oprawa twarda"] +
  ` zł</th>
</tr>

<tr>
  <td class="tg-0pky">` +
  Object.keys(BindowanieTermobindowe)[1] +
  `</td>
  <td class="tg-0pky">` +
  Oprawa["oprawa miękka"] +
  ` zł</td>
</tr>
<tr>
  <td class="tg-0pky">` +
  Object.keys(BindowanieTermobindowe)[2] +
  `</td>
  <td class="tg-0pky">` +
  Oprawa["ponowna oprawa"] +
  ` zł</td>
</tr>

</table>`;
