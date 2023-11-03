var senjataSelect = document.getElementById("Senjata");
var jumlahInput = document.getElementById("jumlah");
var voucherInput = document.getElementById("voucher");
var hasil = document.getElementById("hasil");

document.getElementById("submitButton").addEventListener("click", function () {
  var senjata = senjataSelect.value;
  var jumlah = jumlahInput.value;
  var totalHarga = jumlah * senjata;
  var voucherDiskon = voucherInput.value;
  var diskon = 0;

  if (voucherDiskon === "ASPRAKLEONGANTENG") {
    diskon = (totalHarga * 20) / 100;
  }

  totalHarga -= diskon;

  hasil.innerHTML = `
    <table>
      <tr>
        <td>Senjata</td>
        <td>${senjata}</td>
      </tr>
      <tr>
        <td>Jumlah</td>
        <td>${jumlah}</td>
      </tr>
      <tr>
        <td>Voucher</td>
        <td>${voucherDiskon}</td>
      </tr>
      <tr>
      <td>Total Harga</td>
      <td>${totalHarga}</td>
      </tr>
    </table>
  `;
});
