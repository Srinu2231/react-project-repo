import { json } from "react-router-dom";

const url =
  "https://react-http-8e630-default-rtdb.firebaseio.com/employees.json";
export async function loadEmployees() {
  const response = await fetch(url);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch employees." },
      {
        status: 500,
      }
    );
  } else {
    const empList = [];
    const resData = await response.json();
    for (const taskKey in resData) {
      empList.push(resData[taskKey]);
      //   resData[taskKey].forEach((item, index) => {
      //     console.log(item, index);
      //     empList.push(item);
      //   });
    }
    return empList;
  }
}

export async function sendRequest(method, dataObj) {
  const response = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(dataObj),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not save employee data." }, { status: 500 });
  }
}
