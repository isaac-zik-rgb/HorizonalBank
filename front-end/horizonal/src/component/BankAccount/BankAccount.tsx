import React, { useEffect, useState } from "react";
import BankCard from "./BankCard";
import SpendingBar from "./SpendngBar";
import { getCards } from "../DashBoard/AppUtils";

interface BankAccountsProps {}

const BankAccounts: React.FC<BankAccountsProps> = () => {
  const [cards, setCards] = useState<any[]>([]);

  useEffect(() => {
    getCards()
      .then((data) => {
        setCards(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const cards = [
  //   {
  //     accountName: "Horizon Banking",
  //     holderName: "Adrian Hajdin",
  //     cardNumber: "1234 1234 1234 1234",
  //     expirationDate: "06/24",
  //     spending: 2840.4,
  //     gradient: "bg-primary",
  //     logoSrc:
  //       "https://cdn.builder.io/api/v1/image/assets/TEMP/9d2d7956f463b215b7f0a3298d988f3d94b3eb52d573298a725b346213cfb885?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22",
  //   },
  //   {
  //     accountName: "Bank of Australia",
  //     holderName: "Adrian Hajdin",
  //     cardNumber: "1234 1234 1234 1234",
  //     expirationDate: "06/24",
  //     spending: 2840.4,
  //     gradient: "bg-primary",
  //     logoSrc:
  //       "https://cdn.builder.io/api/v1/image/assets/TEMP/2b3c2412d271a72b2a9e6daca0f5d70899042ff5ce3ebc940c6e52840aeebc3f?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22",
  //   },
  //   {
  //     accountName: "Bank of India",
  //     holderName: "Adrian Hajdin",
  //     cardNumber: "1234 1234 1234 1234",
  //     expirationDate: "06/24",
  //     spending: 2840.4,
  //     gradient: "bg-primary",
  //     logoSrc:
  //       "https://cdn.builder.io/api/v1/image/assets/TEMP/038ee99e98ef3b4c9087e498d94d2753f99f91e6e9c7d1ce0370304dfbb30259?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22",
  //   },
  //   {
  //     accountName: "Bank of America",
  //     holderName: "OLIVIA RHYE",
  //     cardNumber: "1234 1234 1234 1234",
  //     expirationDate: "06/24",
  //     spending: 2840.4,
  //     gradient: "bg-secondary",
  //     logoSrc:
  //       "https://cdn.builder.io/api/v1/image/assets/TEMP/099797b435bfa234643eae797f13b78ba5f948091bb54ef334dc9ea749a457c5?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22",
  //   },
  //   {
  //     accountName: "Bank of Canada",
  //     holderName: "OLIVIA RHYE",
  //     cardNumber: "1234 1234 1234 1234",
  //     expirationDate: "06/24",
  //     spending: 2840.4,
  //     gradient: "bg-secondary",
  //     logoSrc:
  //       "https://cdn.builder.io/api/v1/image/assets/TEMP/3983d318ca886005c548dab786b46ee29216396daf0052cffae5096efdc65efa?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22",
  //   },
  //   {
  //     accountName: "Bank of Pakistan",
  //     holderName: "OLIVIA RHYE",
  //     cardNumber: "1234 1234 1234 1234",
  //     expirationDate: "06/24",
  //     spending: 2840.4,
  //     gradient: "bg-secondary",
  //     logoSrc:
  //       "https://cdn.builder.io/api/v1/image/assets/TEMP/d2aa2efd0ad7d15443a3136c188d6d486c755b5cf8bdf0249048f71649b04e5b?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22",
  //   },
  // ];

  return (
    <main className="container-fluid py-5">
      <header className="mb-4">
        <h1 className="display-4">My Bank Accounts</h1>
        <p className="lead text-muted">
          Effortlessly Manage Your Banking Activities
        </p>
      </header>
      <section className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="h4">Your cards</h2>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbf41178e208ccff2a1ab57bf3c7ba74190208921d1a749b62b412ad30146751?placeholderIfAbsent=true&apiKey=bea5513f58fa4fdf998b89f6c5d41a22"
            alt=""
            className="img-fluid"
            style={{ width: "20px", cursor: "pointer" }}
            onClick={() => {
              console.log("clicked!");
            }}
          />
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {cards.map((card, index) => (
            <div key={index} className="col">
              <BankCard {...card} />
              <SpendingBar spending={card.spending} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BankAccounts;
