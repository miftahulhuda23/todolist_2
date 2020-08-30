import React from "react";
import axios from "../../../node_modules/axios/dist/axios.js";

let data = [];

axios
  .get("http://localhost:3000/list")
  .then((response) => {
    const listData = document.getElementById("listData");
    data = response.data;

    data.forEach((data, id) => {
      const { list } = data;
      const tablelist = `<tr>
            <th scope="row">${id + 1}</th>
                    <td>${list}</td>
                    <td>
                    <button type="button" class="btn btn-danger" onclick="deleteList(${
                      data.id
                    })"><i class="fas fa-trash-alt"></i></button> &nbsp
                    <button type="button" class="btn btn-info" onclick="editList(${
                      data.id
                    })"><i class="fas fa-pen-alt"></i></button>
                    </td>
            </tr>`;

      listData.innerHTML += tablelist;
    });
  })
  .catch((error) => {
    console.log(error);
  });
