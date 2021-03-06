import { Request, Response } from "express";
import connection from "../connection";
import { hash } from "../services/hashManager";
import transporter from "../services/transporter";

export default async function resetPassword(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const email = req.body.email;
    const [user] = await connection("cookenu_users").where({ email });
    console.log(user);
    if (!user) {
      throw new Error("Email not registered");
    }
    const characteres = "abcdefABCDEF12345!?[]{}";
    let newPassword = "";
    // res.status(201).send();
    // return;
    for (let i = 0; i < 10; i++) {
      const index = Math.floor(Math.random() * (characteres.length - 1));
      newPassword += characteres[index];
    }
    const newHash = await hash(newPassword);

    await connection("cookenu_users")
      .update({ password: newHash })
      .where({ email });

    await transporter.sendMail({
      from: "linhavitoriaa@gmail.com",
      to: [`${email}`],
      subject: "Reset Password",
      text: `Your new password is ${newPassword}`,
    });

    res.send("Email sended");
  } catch (error) {
    res.send({ error: error.message });
  }
}
