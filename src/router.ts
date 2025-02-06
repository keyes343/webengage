import { Router, Request, Response } from "express";
import axios from "axios";
import { json2csv } from "json-2-csv";
import path from "path";
import fs from "fs";

export const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

router.get("/generate-csv", async (req: Request, res: Response) => {
  const apiCalls = [
    axios.get("https://jsonplaceholder.typicode.com/users"),
    axios.get("https://jsonplaceholder.typicode.com/posts"),
    axios.get("https://jsonplaceholder.typicode.com/comments"),
  ];

  try {
    const results = await Promise.allSettled(apiCalls);

    const response1 = results[0].status === "fulfilled" ? results[0].value.data : null;
    const response2 = results[1].status === "fulfilled" ? results[1].value.data : null;
    const response3 = results[2].status === "fulfilled" ? results[2].value.data : null;

    const combinedResponse: {
      name: string;
      title: string;
      body: string;
    }[] = [];

    response1.forEach((user: any) => {
      combinedResponse.push({
        name: user.name,
        title: response2.find((post: any) => post.id === user.id)?.title,
        body: response3.find((post: any) => post.id === user.id)?.body,
      });
    });

    // Converting the JSON data to CSV
    const csv = json2csv(combinedResponse, {});

    // Path to the CSV file
    const filePath = path.join(__dirname, "data.csv");

    // Writing the CSV data to the file
    fs.writeFile(filePath, csv, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Error writing to file");
      }
    });

    const cleanFilePath = filePath.replace(/\\/g, "/");

    res.json(cleanFilePath);
  } catch (error) {
    console.log(error);
  }
});

// router.use("/user", ctrl.user_router);
