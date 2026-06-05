"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {

  const [data,setdata] =useState({
    email:"",
    password:"",
    phoneNO:"",
    name:"",
    confirmpassword:"",
    userType:"admin"
  })

  const router =useRouter()

  const [error,seterror] =useState("");

  const handlesubmit = async(e:React.FormEvent)=>{
e.preventDefault();

    try{
      if(data.password!==data.confirmpassword){
seterror("password should match")
return 
      }
      else{
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/user/api/register`,{email:data.email,password:data.password,phoneNO:data.phoneNO,name:data.name,userType:data.userType})
   seterror("Account Created Successfully")
   router.push('/login')
  
      }
    }
    catch(err:any){
      seterror(err.response?.data?.message ||"somthing went wrong");
      console.log(err);
     
    }
  
  }
  
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handlesubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input id="name" type="text" placeholder="John Doe" value={data.name} onChange={(e)=>setdata({...data,name:e.target.value})} required />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={data.email}
                onChange={(e)=>setdata({...data,email:e.target.value})}
                required
              />
              <FieldDescription>
                We&apos;ll use this to contact you. We will not share your email
                with anyone else.
              </FieldDescription>
            </Field>
             <Field>
              <FieldLabel htmlFor="mobile">Phone No</FieldLabel>
              <Input id="mobile" type="tel" required  value={data.phoneNO} onChange={(e)=>setdata({...data,phoneNO:e.target.value})}/>
              <FieldDescription>
                Must be at exact 10 digit  long.
              </FieldDescription>
            </Field>

            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input id="password" type="password" value={data.password} onChange={(e)=>setdata({...data,password:e.target.value})} required  />
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="confirm-password">
                Confirm Password
              </FieldLabel>
              <Input id="confirm-password" type="password" required  value={data.confirmpassword} onChange={(e)=>setdata({...data,confirmpassword:e.target.value})}/>
              <FieldDescription>Please confirm your password.</FieldDescription>
            </Field>
            <FieldGroup>
              <Field>
                <Button type="submit">Create Account</Button>
                <Button variant="outline" type="button">
                  Sign up with Google
                </Button>
                <FieldDescription className="px-6 text-center">
                  Already have an account? <a href="/login">Sign in</a>
                </FieldDescription>
              </Field>
              <Field>
                <FieldDescription>
                {error}
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
