\# Contract Expiration Email Notifier 📩



A real-world Google Sheets automation that sends email alerts when a contract is close to its expiration date.



This project is based on an actual internal tool used to ensure timely contract renewals — reducing operational risks and preventing missed renewals.



---



\## 🚀 What the Script Does



✔ Reads contract data from a Google Sheet  

✔ Checks if each contract should trigger an alert  

✔ Sends an automatic reminder email  

✔ Marks the contract as \*\*"SENT"\*\* once processed  

✔ Prevents duplicate emails



This allows HR or administrative teams to stay ahead of deadlines without manual follow-up.



---



\## 📄 Sheet Requirements



The script expects the following columns:



| Column | Name | Description |

|--------|------|-------------|

| A | Contract Code | Identifier of the contract |

| B | Client Name | Who the contract belongs to |

| E | Expiration Date | Must be a Date type |

| F | Notification Status | Displays "SENT" after email sent |

| G | Send Email Flag | "YES" = email should be sent |



📝 You may rename columns in your sheet — just update indexes in the code.



---



\## ✉ How Email Sending Works



\- Only rows with `"YES"` in the \*\*Send Email Flag\*\* column are processed

\- Emails are sent to the address defined in the script

\- After sending, `"SENT"` is written to the \*\*Notification Status\*\* column



👉 To test the script:

\- Change the expiration date to a near future date

\- Delete the `"SENT"` text to allow re-sending

\- Modify the `"YES"` flag if needed



---



---



\## ⏱️ Automation Trigger Setup



To enable automatic daily notifications:



1️⃣ Open the Apps Script editor  

2️⃣ Go to \*\*Triggers\*\* (clock icon on the left)  

3️⃣ Click \*\*“Add Trigger”\*\*  

4️⃣ Select:



\- Function to run → `sendEmail`

\- Deployment → `Head`

\- Event source → \*\*Time-driven\*\*

\- Time type → \*\*Day timer\*\*

\- Set whatever time is appropriate for you



This will make the script run every day, check the sheet, and send emails only when needed.



You can also manually execute the script with the ▶ Run button for testing.



---





\## ⚠️ Important Configuration



Before running:



1️⃣ Replace the placeholder email address in `Code.gs`:

```js

const email = "example@example.com";



