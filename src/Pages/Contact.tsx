import { TopPageIndicator } from "../components/TopPageIndicator";
import Fachada from "../assets/Fachada.png"
import { Section } from "../components/Sections";
import Phone from "../assets/Icons/Phone icon.png"
import Address from "../assets/Icons/Address Icon.png"
import Email from "../assets/Icons/Email Icon.png"
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { api } from "../services/api";
import { Button } from "../ui/Button";
const formSchema = z.object({
  name : z.string().min(3, { message : "Nome curto demais"}),
  surname : z.string().min(3, { message : "Sobrenome curto demais"}),
  email : z.string().email(),
  subject : z.string().min(3),
  message : z.string().min(10, { message : "Mensagem curta demais"}),
});
type FormSchema = z.infer<typeof formSchema>
type InputKey = keyof FormSchema
export function Contact (){ 
  const methods = useForm<FormSchema>({
    resolver : zodResolver(formSchema)
  });
  const { mutateAsync : sendMessageAsync } = useMutation({
    mutationFn : async (data : FormSchema) => {
      const response = await api.post("send_message", data );
      return response.data;
    },
    mutationKey : ["send-contact"]
  });
  const handleSubmitForm = async (data : FormSchema) => {
    
    try {
      await sendMessageAsync(data);
    }catch (error : unknown) {
    } 
  }
  return (
    <main className="w-full">
      <TopPageIndicator page="Contact"/>
      <img src={Fachada} className="w-full object-cover aspect-video max-h-[500px]" alt="" />
      <Section  description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto ratione ea tempore? Perferendis, in tempore iusto quasi, odio, laudantium suscipit dolores quidem quod iure provident aut nam quibusdam consequuntur sequi? orem ipsum dolor sit amet consectetur, adipisicing elit. Iusto ratione ea tempore? Perferendis, in tempore iusto quasi, odio, laudantium suscipit dolores quidem quod iure"   >
        <main className="w-full flex justify-between mt-20 gap-20">
          <aside className="bg-main py-20 px-10 h-full w-2/5 rounded-md">
            <ul className="flex flex-col gap-6">
              <legend className="font-bold">
                Informações de contato
              </legend>
              <li className="flex gap-4 items-center"><img src={Phone} alt="" /> Praia de Botafogo, 501 - Botafogo Rio de Janeiro, RJ - CEP:  22250-040 </li>
              <li className="flex gap-4 items-center"><img src={Phone} alt="" /> Tel.: (21) 2543-3881</li>
              <li className="flex gap-4 items-center"><img src={Phone} alt="" /> cempresarial@mourisco.com</li>
            </ul>
          </aside>
          <FormProvider {...methods}>
            <form 
              className="flex flex-col w-[60%] gap-4 "
              onSubmit={methods.handleSubmit(handleSubmitForm)}>
              <legend className="text-2xl font-bold mb-5">Formulário de contato</legend>
              <header className="flex items-center gap-5">
                <CustomFieldSet<InputKey>  
                  label="Nome" 
                  name="name" 
                  type="text"
                />
                <CustomFieldSet<InputKey>  
                  label="Sobrenome" 
                  name="surname" 
                  type="text"
                />
              </header>
              <CustomFieldSet<InputKey>  
                label="E-mail" 
                name="email" 
                type="email"
              />
              <CustomFieldSet<InputKey>  
                label="Assunto" 
                name="subject" 
                type="text"
              />
              <textarea {...methods.register("message")} className="border border-secondary rounded-md resize-none h-40 w-full p-4" placeholder="Digite sua mensagem..."></textarea>
              <Button type="submit" title="Enviar" description="Submeter mensagem" />
            </form>
          </FormProvider>
        </main>
      </Section>
      <iframe 
      className="w-full" 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.9928662272396!2d-43.18326282581381!3d-22.95048983943219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997ff0e299ea4b%3A0x24628b9194358b87!2sCentro%20Empresarial%20Mourisco!5e0!3m2!1spt-BR!2sbr!4v1727574147438!5m2!1spt-BR!2sbr" width="800" height="600" 
      loading="lazy">
        
      </iframe>
    </main>
  );
}

interface CustomFieldsetProps <T extends string>{
  label : string;
  name : T;
  type : "text" | "email" | "password" 
}
function CustomFieldSet <T extends string>({label, name, type} : CustomFieldsetProps<T>) {
  const methods = useFormContext();
  return (
    <fieldset className="flex flex-col gap-3 w-full">
      <label htmlFor={name}>{label}*</label>
      <input 
        type={type} 
        id={name} 
        required {...methods.register(name)} 
        className="rounded-md p-2 border border-secondary w-full" 
      />
    </fieldset>
  );
}