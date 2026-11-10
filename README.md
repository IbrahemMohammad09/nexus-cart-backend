# Multi-Vendor E-Commerce & Logistics Core

A scalable backend system designed to power a multi-vendor e-commerce platform, integrating product management, inventory control, order processing, payment tracking, and logistics operations.

This project goes beyond a traditional e-commerce application by focusing on real-world business logic, secure authentication, role-based access control, data integrity, and scalable backend architecture.

> **Project Status:** Planning & Development  
> **Project Type:** Backend API / Multi-Vendor E-Commerce  
> **Primary Goal:** Build a secure, scalable, and maintainable backend system following modern software engineering best practices.

---

## Table of Contents

- [Overview](#overview)
- [Core Features](#core-features)
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

Customers can browse products, manage shopping carts, place orders, and track their purchases, while vendors and administrators have access to dedicated management APIs.

The system also introduces a logistics layer that supports delivery personnel, shipment tracking, and order fulfillment workflows.

Unlike a basic CRUD application, this project focuses on implementing complex business logic, secure resource access, inventory consistency, and structured order processing.

### Key Objectives

- Build a modular and scalable backend architecture.
- Implement secure authentication and authorization.
- Support multiple vendors within a single marketplace.
- Maintain inventory consistency during concurrent order processing.
- Manage the complete order lifecycle.
- Provide dedicated APIs for administrative and vendor dashboards.
- Apply production-oriented security and error-handling practices.

---

## Core Features

### 1. Authentication & Security
- User registration and login with email verification.
- Password hashing using **bcryptjs**.
- Secure **JWT-based authentication** (Access Token & Refresh Token management).
- Refresh Token rotation and session invalidation.
- Password recovery via email OTP.
- **Role-Based Access Control (RBAC)** across protected routes.

### 2. Product & Inventory Management
- CRUD operations for products with vendor-specific ownership.
- Image uploading, optimization, and cloud storage integration.
- Dynamic inventory management with real-time stock tracking.
- Automatic inventory locks/updates during order processing to prevent overselling.

### 3. Shopping Cart & Order Processing
- User-specific shopping carts with server-side price validation.
- Automated totals, discounts, and fee calculations.
- Multi-vendor order creation and status tracking lifecycle.
- Atomic stock validation prior to order confirmation.

### 4. Admin & Vendor Dashboards
- **Admin Dashboard:** Platform-wide metrics, user/vendor oversight, overall sales analytics, and category management.
- **Vendor Dashboard:** Store-specific analytics, revenue tracking, low-stock alerts, and best-selling products.

### 5. Advanced Querying & API Security
- Built-in pagination, filtering, search, and sorting middleware for large datasets.
- Centralized error-handling middleware.
- Security enforcement via **Helmet**, **CORS**, and **Rate Limiting**.
- Request input sanitization against NoSQL injection.

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
| **Validation & Security** | Zod / Express-Validator, Helmet, CORS, Rate Limit |
| **Logging & Utilities** | Morgan, Dotenv |
| **Version Control** | Git & GitHub |

---

## Project Architecture

```text
nexus-cart-backend/
├── src/
│   ├── config/          # Database connection & env configurations
│   ├── controllers/     # Request handlers and business logic wrappers
│   ├── models/          # Mongoose schemas and data models
│   ├── routes/          # API route definitions
│   ├── middlewares/     # Auth, error handling, rate limiting, and validation
│   ├── utils/           # Helper functions, logger, and custom error classes
│   ├── app.js           # Express app setup and middleware configuration
│   └── server.js        # Server entry point and database connection logic
├── .env.example         # Template for environment variables
├── .gitignore           # Git ignore rules
├── package.json         # Dependencies and scripts
└── README.md            # Project documentation