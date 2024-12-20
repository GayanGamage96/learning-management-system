import { Request, Response } from "express";
import { clerkClient } from "../index";

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userid } = req.params;
  // console.log("req is:",req.params);
  // console.log("user id is:",userid);

  const userData = req.body;

  // Validate userId
  if (!userid || typeof userid !== "string") {
    res.status(400).json({ message: "A valid resource ID is required" });
    return;
  }

  // Validate userData
  if (!userData || !userData.publicMetadata) {
    res
      .status(400)
      .json({ message: "Invalid request body: publicMetadata is required" });
    return;
  }

  try {
    const user = await clerkClient.users.updateUserMetadata(userid, {
      publicMetadata: {
        userType: userData.publicMetadata.userType,
        settings: userData.publicMetadata.settings,
      },
    });

    res.json({ message: "User updated successfully", data: user });
  } catch (error: any) {
    console.log("Error updating user:", error?.response || error);
    res.status(500).json({
      message: "Error updating user",
      error: error?.message || "Unknown error occurred",
    });
  }
};
