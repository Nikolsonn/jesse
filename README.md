
# Jesse ad board
## Advertisement Management System

## Project Description
A comprehensive system for managing advertisements within a channel-based interface, handling ad creation, display, and tracking functionalities.

## Features
- Channel-based advertisement management
- Ad creation and image attachment
- Referral link
- History tracking
- User profile management
- Channel ads managment

## System Architecture

<img width="1068" alt="image" src="https://github.com/user-attachments/assets/12690fbf-c97f-497d-bcd7-a6d2b42723ec">

**Data Models**
```json
ads: {
    "authorId": string,
    "channelId": string,
    "adId": string,
    "imageLink": string,
    "title": string,
    "text": string,
    "price": number,
    "status": "approved" | "rejected" | "pending",
}
```

## Core Workflows

**Advertisement Flow**
1. Access through Channel interface
2. Open Ad board mini app
3. View existing ads or create new ones
4. Handle referral link interactions
5. Manage ad history

**User Management**
1. Profile access and management
2. Ad creation and attachment
3. Content moderation compliance
4. Transaction history viewing

## Interface Components

**Main Screens**
- Channel Dashboard
- Ad Board Interface
- Ad Creation Screen
- History Management
- Profile Management
- Channel management

## Technical Requirements
- Image upload and storage capability
- User authentication system (telegram-based)
- Referral link verification
- Transaction status management (telegram-wallet)
- Channel rules compliance system

## Installation
*In progress*

## Reference links

https://github.com/Telegram-Mini-Apps/TelegramUI?tab=readme-ov-file

https://github.com/sacredneobi/DurgerKingBot

## Design project

<img width="350" alt="image" src="https://github.com/user-attachments/assets/968be654-cc30-4f54-bf4d-09acaac0a3cd">

