import type { ActionFunctionArgs } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { Button } from "~/components/Button";
import { FormField } from "~/components/FormField";

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();
  const { email, password } = Object.fromEntries(body);

  return { isAdmin: email === "sam@buildui.com" && password === "password" };
}

export default function LoginPage() {
  const data = useActionData<typeof action>();

  return data?.isAdmin ? (
    <div style={{ width: 475, marginInline: "auto" }}>
      <p>You're signed in!</p>
    </div>
  ) : (
    <div style={{ width: 475, marginInline: "auto" }}>
      <h3>Login</h3>
      <Form method="post" autoComplete="off">
        <FormField
          id="email"
          name="email"
          label="Email"
          placeholder="Enter Email"
          type="email"
        />
        <FormField
          id="password"
          name="password"
          label="Password"
          placeholder="Enter Password"
          type="password"
        />
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
}
