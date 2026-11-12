# Multi-Vendor E-Commerce & Logistics Core

A scalable, localized backend system designed to power a multi-vendor e-commerce platform, integrating product management, inventory control, order processing, payment tracking, logistics operations, and multi-language support (English & German).

This project goes beyond a traditional e-commerce application by focusing on real-world business logic, secure authentication, role-based access control, data integrity, localized localized user experience, and scalable backend architecture.

> **Project Status:** Planning & Development  
> **Project Type:** Backend API / Multi-Vendor E-Commerce  
> **Primary Goal:** Build a secure, scalable, localized, and maintainable backend system following modern software engineering best practices.

---

## Table of Contents

- [Overview](#overview)
- [Core Features](#core-features)
- [Localization & Multi-Language Support](#localization--multi-language-support)
- [User Roles & Permissions](#user-roles--permissions)
- [Technology Stack](#technology-stack)
- [Project Architecture](#project-architecture)
- [Installation & Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [Development Roadmap](#development-roadmap)
- [License](#license)

---

## Overview

The Multi-Vendor E-Commerce & Logistics Core is a backend system designed to support an online marketplace where multiple vendors can manage their own stores, products, and inventory.

Customers can browse products in their preferred language (English or German), manage shopping carts, place orders, and track their purchases, while vendors and administrators have access to dedicated management APIs.

The system also introduces a logistics layer that supports delivery personnel, shipment tracking, and order fulfillment workflows.

Unlike a basic CRUD application, this project focuses on implementing complex business logic, secure resource access, inventory consistency, localized communications, and structured order processing.

### Key Objectives

- Build a modular, localized, and scalable backend architecture.
- Implement secure authentication and authorization with role-based access.
- Support multiple vendors within a single marketplace.
- Support internationalization (i18n) for German and English locales.
- Maintain inventory consistency during concurrent order processing.
- Manage the complete order lifecycle with localized notification templates.
- Provide dedicated APIs for administrative and vendor dashboards.
- Apply production-oriented security and error-handling practices.

---

## Core Features

### 1. Authentication & Security
- User registration and login with email verification.
- Password hashing using **bcryptjs**.
- Secure **JWT-based authentication** (Access Token & Refresh Token management).
- Refresh Token rotation and session invalidation.
- Password recovery via email OTP (sent in user's preferred language).
- **Role-Based Access Control (RBAC)** across protected routes.

### 2. Localization & Internationalization (i18n)
- **Multi-language Database Fields:** Schema support for localized product titles, descriptions, and category names (`en` / `de`).
- **Header-Based Language Detection:** Automatic resolution of preferred language via `Accept-Language` headers or user profile settings.
- **Localized System Communication:** Email templates (OTP, order confirmations, status updates) and API response messages localized in English and German.

### 3. Product & Inventory Management
- CRUD operations for products with vendor-specific ownership and bilingual metadata (`en` and `de`).
- Image uploading, optimization, and cloud storage integration.
- Dynamic inventory management with real-time stock tracking.
- Automatic inventory locks/updates during order processing to prevent overselling.

### 4. Shopping Cart & Order Processing
- User-specific shopping carts with server-side price validation.
- Automated totals, discounts, and fee calculations.
- Multi-vendor order creation and status tracking lifecycle.
- Atomic stock validation prior to order confirmation.

### 5. Admin & Vendor Dashboards
- **Admin Dashboard:** Platform-wide metrics, user/vendor oversight, overall sales analytics, and category management.
- **Vendor Dashboard:** Store-specific analytics, revenue tracking, low-stock alerts, and best-selling products.

### 6. Advanced Querying & API Security
- Built-in pagination, filtering, search (bilingual), and sorting middleware for large datasets.
- Centralized error-handling middleware returning localized error messages.
- Security enforcement via **Helmet**, **CORS**, and **Rate Limiting**.
- Request input sanitization against NoSQL injection.

---

## Localization & Multi-Language Support

The system natively supports **English (`en`)** and **German (`de`)**:

| Component | Implementation Strategy |
|---|---|
| **Content Translation** | Schemas support multilingual fields (e.g., `name: { en: String, de: String }`). |
| **API Responses** | Error and success messages adapt based on the `Accept-Language` header. |
| **Emails & OTPs** | Email templates are rendered in the recipient's chosen language. |
| **User Preference** | Users can persist their preferred language (`en` or `de`) in their profile settings. |

---

## User Roles & Permissions

| Role | Responsibilities |
|---|---|
| **Customer** | Browse products, manage carts, place orders, and track purchases. |
| **Vendor** | Manage store profiles, owned products, inventory, and vendor orders. |
| **Admin** | Full system oversight: users, vendors, categories, orders, and platform metrics. |
| **Delivery** | View assigned shipments and update delivery/fulfillment statuses. |

---

## Technology Stack

| Category | Technology |
|---|---|
| **Runtime Environment** | Node.js |
| **Framework** | Express.js |
| **Database & ODM** | MongoDB, Mongoose |
| **Authentication** | JSON Web Tokens (JWT), Bcrypt |
| **Localization (i18n)** | i18next / custom locale middleware |
| **Validation & Security** | Zod / Express-Validator, Helmet, CORS, Rate Limit |
| **Logging & Utilities** | Morgan, Dotenv |
| **Version Control** | Git & GitHub |

---

## Project Architecture

```text
nexus-cart-backend/
├── src/
│   ├── config/          # Database connection, env, & i18n configurations
│   ├── controllers/     # Request handlers and business logic wrappers
│   ├── models/          # Mongoose schemas and data models (supporting i18n fields)
│   ├── routes/          # API route definitions
│   ├── middlewares/     # Auth, error handling, locale detection, rate limiting, and validation
│   ├── utils/           # Helper functions, logger, email templates (EN/DE), and custom error classes
│   ├── app.js           # Express app setup and middleware configuration
│   └── server.js        # Server entry point and database connection logic
├── .env.example         # Template for environment variables
├── .gitignore           # Git ignore rules
├── package.json         # Dependencies and scripts
└── README.md            # Project documentation