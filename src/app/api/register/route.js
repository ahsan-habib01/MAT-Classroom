import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      return NextResponse.json(
        { message: 'User registered successfully.' },
        { status: 201 },
      );
    } else {
      return NextResponse.json(
        { message: data.message || 'An error occurred while registering the user.' },
        { status: res.status },
      );
    }
  } catch (error) {
    console.error('Registration error: ', error);
    return NextResponse.json(
      { message: 'An error occurred while registering the user.' },
      { status: 500 },
    );
  }
}
