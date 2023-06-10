import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
export default function signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName ] = useState("");
  const [phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  return (
    <div>signup</div>
  )
}
