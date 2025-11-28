function sendEmail() {

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Hoja1"); 
  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    
    const contractKey = data[i][0];     
    const clientName = data[i][1];      
    const send = data[i][4];
    const dateValue = new Date(data[i][4]);   
    const contractExpirationDate = formatDate(dateValue); 
    const sent = data[i][5];     
    const email = "example@example.com";

    if (send === "YES" && sent !== "SENT") {

      const message = `Hello the contract with code: ${contractKey} corresponding to client ${clientName}, is about to expire on ${contractExpirationDate}`;

      MailApp.sendEmail({
        to: email,
        subject: "Contract Expiration Notice",
        htmlBody: message
      });

      sheet.getRange(i + 1, 6).setValue("SENT");
    }
  }
}

function formatDate(fecha) {
  const day = ("0" + fecha.getDate()).slice(-2);
  const month = ("0" + (fecha.getMonth() + 1)).slice(-2);
  const year = fecha.getFullYear();
  return `${day}/${month}/${year}`;
}