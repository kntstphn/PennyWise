"use client";

import Dashboard from "@/lib/components/dashboard";
import ProtectedRoute from "@/lib/components/protected/protectedRoute";
import React, { useContext, useEffect } from "react";

function Page() {
  return (
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  );
}

export default Page;
