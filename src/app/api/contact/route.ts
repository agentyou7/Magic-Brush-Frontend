import { NextRequest, NextResponse } from 'next/server';

const getBackendBaseUrl = () => {
  return (
    process.env.NEXT_PUBLIC_BACKEND_URL ||
    process.env.NEXT_PUBLIC_API_URL ||
    'http://localhost:3000'
  ).replace(/\/+$/, '');
};

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const backendResponse = await fetch(`${getBackendBaseUrl()}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      cache: 'no-store',
    });

    const data = await backendResponse.json().catch(() => ({
      success: false,
      message: 'Invalid response from contact service',
    }));

    return NextResponse.json(data, { status: backendResponse.status });
  } catch (error) {
    console.error('Frontend contact proxy error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to submit contact request',
      },
      { status: 500 }
    );
  }
}
