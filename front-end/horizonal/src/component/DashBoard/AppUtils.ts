export const getUser = async () => {
  try {
    const response = await fetch("https://horizonalbank.onrender.com/api/user", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in getUser function:", error);
    throw error;
  }
};

export const getAcct = async () => {
  try {
    const response = await fetch("https://horizonalbank.onrender.com/api/accounts", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch account");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in getAcct function:", error);
    throw error;
  }
};


export const getTransactions = async (max: number) => {
  try{
    const response = await fetch(`https://horizonalbank.onrender.com/api/transactions?accountId=${Number(localStorage.getItem("accountId"))}`,{
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if(!response.ok) {
    throw new Error("Failed to fetch Transactions");
    }

    const data = await response.json();
    if (max == 5){
      return data.slice(-max);
    }
    return data;
    
  } catch(error) {
    console.log("Error in getTransactions function: ", error);
    throw error;
  }
};








// for getting digital cards 
export const getCards = async () => {
  try{
    const response = await fetch(`https://horizonalbank.onrender.com/api/digital-cards?accountId=${localStorage.getItem("accountId")}`,{
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if(!response.ok) {
    throw new Error("Failed to fetch Transactions");
    }

    const data = await response.json();
   
    return data;
  } catch(error) {
    console.log("Error in getTransactions function: ", error);
    throw error;
  }
};


export const formateDate = (dateString: string) => {
  const date = new Date(dateString);

  //Extract month and year

  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear().toString().slice(-2); //get the last two digit

  return `${month}/${year}`;
}