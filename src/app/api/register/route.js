import { NextResponse } from 'next/server';
import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    await connectMongoDB();

    // Check if user already exists
    const userExists = await User.findOne({ email }).select('_id');
    if (userExists) {
      return NextResponse.json(
        { message: 'User already exists.' },
        { status: 400 },
      );
    }

    // Hash the password securely
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user to DB
    await User.create({ name, email, password: hashedPassword });

    return NextResponse.json(
      { message: 'User registered successfully.' },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'An error occurred while registering the user.' },
      { status: 500 },
    );
  }
}
