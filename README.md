# 💰 EXPENSE TRACKER (MERN STACK)

This project focuses on building a **minimal full-stack expense tracker** to help users **record, filter, sort, and analyze their personal expenses** using the MERN stack.

---

## 📌 Project Overview

The goal of this project is to:
- Track **personal expenses** including amount, category, description, and date
- Allow users to **filter expenses by category**
- Enable **sorting by amount (default)** or **newest date**
- Calculate and display **total expenses dynamically**
- Handle **real-world scenarios** like network retries, duplicate submissions, and page refreshes

---

## 🛠 Tools & Technologies

- ⚛️ **React** (Frontend UI)
- 🌐 **Express.js** (Backend API)
- 🗄 **MongoDB** (Database, Decimal128 for money handling)
- 🔄 **Axios** (HTTP requests)
- 🔐 **Idempotency-Key** for safe request handling

---

## 🔍 Features Implemented

- 💵 Create a new expense with validation (amount, category, date required)
- 📑 View a list of all expenses
- 🔍 Filter expenses **case-insensitively** by category
- 📅 Sort expenses:
  - 💰 **By Amount** (default, descending)
  - 🆕 **By Date** (newest first)
- ➕ Calculate **total of currently visible expenses**
- 🔒 Prevent **duplicate submissions** using idempotency key

---

## 📈 Key Design Decisions

- 🔑 **Idempotency for safe retries**: Prevents duplicate entries when the user clicks submit multiple times or refreshes the page
- 🧮 **Decimal handling for money**: Uses MongoDB `Decimal128` to avoid floating-point precision errors
- 🔄 **Backend-controlled sorting and filtering**: Ensures accurate totals and scalable data handling
- 🧹 **Case-insensitive category filtering**: Improves user experience and prevents mismatches due to capitalization or spaces

---

## ⏳ Trade-offs Due to Timebox

Due to the limited time for this project:

- ❌ No authentication or multi-user support
- ❌ No expense editing or deletion
- ❌ No charts or analytics dashboard
- ❌ Limited automated tests
- ❌ Minimal CSS styling (focus on clarity over aesthetics)

---

## 🎯 Prioritized Goals

- ✔ Correct and safe handling of money
- ✔ Real-world reliability (duplicate submission prevention)
- ✔ Accurate totals and filtering
- ✔ Clean and maintainable code structure
- ✔ Production-like API behavior

---

## 📌 Conclusion

This project provides a **reliable, minimal, and maintainable** expense tracking system that can be **easily extended** in the future for:

- User authentication
- Analytics dashboard
- Charts and visualizations
- Editing or deleting expenses
- Pagination for large datasets
