//src/app/payment/route.ts
import type {NextRequest} from "next/server";

import {MercadoPagoConfig, Payment} from "mercadopago";

const client = new MercadoPagoConfig({accessToken: process.env.MP_ACCESS_TOKEN!});

export async function POST(request: NextRequest) {
  const body = await request.json().then((data) => data as {data: {id: string}});

  const payment = await new Payment(client).get({id: body.data.id});

  console.log("payment:", payment);
  console.log("body:", body);

  return Response.json({success: true});
}
