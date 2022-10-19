import type { NextApiRequest, NextApiResponse } from "next";
import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});

const audienceID = process.env.MAILCHIMP_AUDIENCE_ID;
if (!audienceID) throw new Error("Mailchimp Audience ID missing");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    await mailchimp.lists.addListMember(audienceID, {
      email_address: email,
      status: "subscribed",
    });

    return res.status(201).json({ error: "" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error instanceof Error ? error.message : String(error) });
  }
};
