/*import { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MessageSquareShare, Send } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { sendEmail } from "@/lib/resend";

export default function DialogMessage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [fillFields, setFillFields] = useState(false);

  async function handleSend() {
    try {
        await sendEmail({ name, email, message })
        return
    } catch (error) {
        return error
    }
  }

  useEffect(() => {
    if(name !== '' && email !== '' && message !== '') {
        setFillFields(true)
        return
    }

    setFillFields(false)
  }, [name, email, message])

  return (
    <Dialog>
      <DialogTrigger>
        <button className="bg-[#A68D85] p-2 text-white rounded-md font-medium flex items-center gap-1">
          Send Message <Send />
        </button>
      </DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            Send Message <MessageSquareShare />
          </DialogTitle>
          <DialogDescription>
            <p className="text-red-600 font-bold">*fill in the fields!</p>
          </DialogDescription>

          <div className="*:border-black *:border-2 flex flex-col gap-2 *:rounded-md *:p-1">
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="name"
              type="text"
              maxLength={100}
              required
            />
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              type="email"
              maxLength={100}
              required
            />

            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={225}
              placeholder="message"
              required
            />

            <DialogClose disabled={!fillFields ? true : false} className="border-none p-0 disabled:cursor-not-allowed">
                <Button
                  disabled={!fillFields ? true : false}
                  className="bg-[#C1C9D9] w-full border-2 border-black text-blaxk hover:bg-[#0B1726] text-md gap-2 hover:text-white rounded-md"
                  variant={"default"}
                  onClick={handleSend}
                >
                  Send <Send size={20} />
                </Button>
            </DialogClose>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
*/
