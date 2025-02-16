"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "./FormAddHouse.form";

export function FormAddHouse() {
  const [photoUploaded, setPhotoUploaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const supabase = createClient();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "", // Nombre o título de la propiedad
      address: "", // Dirección completa
      city: "", // Ciudad
      photo: "", // URL o ruta de la foto
      builtArea: "", // Metros cuadrados construidos
      bedrooms: "", // Número de habitaciones
      bathrooms: "", // Número de baños
      propertyType: "", // Tipo de propiedad (casa, apartamento, etc.)
      price: "", // Precio de venta (como cadena para permitir formato personalizado)
      isAvailable: false, // ¿Está disponible?
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // Aquí puedes enviar los datos a tu backend o a Supabase
  };

  const { isValid } = form.formState;

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];

    if (!file.type.startsWith("image/")) {
      alert("Por favor, selecciona un archivo de imagen válido.");
      return;
    }

    setLoading(true);

    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}-${crypto.randomUUID()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("casa-images")
        .upload(filePath, file);

      if (uploadError || !uploadData) {
        console.error("Error subiendo la imagen:", uploadError?.message);
        alert(`Error subiendo la imagen: ${uploadError?.message}`);
        return;
      }

      const publicUrl = supabase.storage
        .from("casa-images")
        .getPublicUrl(filePath).data.publicUrl;

      if (!publicUrl) {
        console.error("Error obteniendo la URL pública.");
        alert("No se pudo obtener la URL de la imagen.");
        return;
      }

      form.setValue("photo", publicUrl);
      setPhotoUploaded(true);
      alert("Imagen subida con éxito");
    } catch (error) {
      console.error("Error inesperado:", error);
      alert("Error inesperado al subir la imagen");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre de la propiedad</FormLabel>
                <FormControl>
                  <Input placeholder="Casa moderna en el centro" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dirección</FormLabel>
                <FormControl>
                  <Input placeholder="Calle Falsa 123" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ciudad</FormLabel>
                <FormControl>
                  <Input placeholder="Madrid" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="photo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Imagen de la casa</FormLabel>
                <FormControl>
                  {photoUploaded ? (
                    <p className="text-sm">¡Imagen subida!</p>
                  ) : (
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      disabled={loading}
                    />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="builtArea"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Metros cuadrados construidos</FormLabel>
                <FormControl>
                  <Input placeholder="150" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bedrooms"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Número de habitaciones</FormLabel>
                <FormControl>
                  <Input placeholder="3" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bathrooms"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Número de baños</FormLabel>
                <FormControl>
                  <Input placeholder="2" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="propertyType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de propiedad</FormLabel>
                <FormControl>
                  <Input placeholder="Casa" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Precio</FormLabel>
                <FormControl>
                  <Input placeholder="300000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full mt-5 " disabled={!isValid}>
          {loading ? "Subiendo..." : "Guardar Casa"}
        </Button>
      </form>
    </Form>
  );
}
