import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ProductFormValues, productSchema } from "../../../lib/validators";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { SectionFormProduct } from "./SectionFormProduct";
import { InputForm } from "./InputForm";
import { FeaturesInput } from "./FeaturesInput";
import { useEffect } from "react";
import { generateSlug } from "../../../helpers";
import { VariantsInput } from "./VariantsInput";
import { UploaderImages } from "./UploaderImages";
import { Editor } from "./Editor";
import { useCreateProduct, useProduct, useUpdateProduct } from "../../../hooks";
import { Loader } from "../../shared/Loader";
import { JSONContent } from "@tiptap/react";

interface Props {
  titleForm: string;
}

export const FormProduct = ({ titleForm }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    control,
  } = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
  });

  const { slug } = useParams<{ slug: string }>();

  const { product, isLoading } = useProduct(slug || "");
  const { mutate: createProduct, isPending } = useCreateProduct();
  const { mutate: updateProduct, isPending: isUpdatePending } =
    useUpdateProduct(product?.id || "");

  const navigate = useNavigate();

  useEffect(() => {
    if (product && !isLoading) {
      setValue("name", product.name);
      setValue("slug", product.slug);
      setValue("brand", product.brand);
      setValue(
        "features",
        product.features.map((f: string) => ({ value: f }))
      );
      setValue("description", product.description as JSONContent);
      setValue("images", product.images);
      setValue(
        "variants",
        product.variants.map((v) => ({
          id: v.id,
          stock: v.stock,
          price: v.price,
          storage: v.storage,
          color: v.color,
          colorName: v.color_name,
        }))
      );
    }
  }, [product, isLoading, setValue]);

  const onSubmit = handleSubmit((data) => {
    const features = data.features.map((feature) => feature.value);

    if (slug) {
      updateProduct({
        name: data.name,
        brand: data.brand,
        slug: data.slug,
        variants: data.variants,
        images: data.images,
        description: data.description,
        features,
      });
    } else {
      createProduct({
        name: data.name,
        brand: data.brand,
        slug: data.slug,
        variants: data.variants,
        images: data.images,
        description: data.description,
        features,
      });
    }
  });

  const watchName = watch("name");

  useEffect(() => {
    if (!watchName) return;

    const generatedSlug = generateSlug(watchName);
    setValue("slug", generatedSlug, { shouldValidate: true });
  }, [watchName, setValue]);

  if (isPending || isUpdatePending || isLoading) return <Loader />;

  return (
    <div className="relative flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            className="bg-white p-1.5 rounded-md shadow-sm border border-slate-200 transition-all group hover:scale-105"
            onClick={() => navigate(-1)}
          >
            <IoIosArrowBack
              size={18}
              className="transition-all group-hover:scale-125"
            />
          </button>
          <h2 className="text-2xl font-bold tracking-tight capitalize">
            {titleForm}
          </h2>
        </div>
      </div>

      <form
        className="grid flex-1 grid-cols-1 gap-8 lg:grid-cols-3 auto-rows-max"
        onSubmit={onSubmit}
      >
        <SectionFormProduct
          titleSection="Detalles del Producto"
          className="lg:col-span-2 lg:row-span-2"
        >
          <InputForm
            type="text"
            placeholder="Ejemplo: Lampara de Mesa"
            label="nombre"
            name="name"
            register={register}
            errors={errors}
            required
          />
          <FeaturesInput control={control} errors={errors} />
        </SectionFormProduct>

        <SectionFormProduct>
          <InputForm
            type="text"
            label="Slug"
            name="slug"
            placeholder="lampara-de-mesa"
            register={register}
            errors={errors}
          />

          <InputForm
            type="text"
            label="Marca"
            name="brand"
            placeholder="Ikea"
            register={register}
            errors={errors}
            required
          />
        </SectionFormProduct>

        <SectionFormProduct
          titleSection="Variantes del Producto"
          className="lg:col-span-2 h-fit"
        >
          <VariantsInput
            control={control}
            errors={errors}
            register={register}
          />
        </SectionFormProduct>

        <SectionFormProduct titleSection="Imágenes del producto">
          <UploaderImages errors={errors} setValue={setValue} watch={watch} />
        </SectionFormProduct>

        <SectionFormProduct
          titleSection="Descripción del producto"
          className="col-span-full"
        >
          <Editor
            setValue={setValue}
            errors={errors}
            initialContent={product?.description as JSONContent}
          />
        </SectionFormProduct>

        <div className="absolute top-0 right-0 flex gap-3">
          <button
            className="btn-secondary-outline"
            type="button"
            onClick={() => navigate(-1)}
          >
            Cancelar
          </button>
          <button className="btn-primary" type="submit">
            Guardar Producto
          </button>
        </div>
      </form>
    </div>
  );
};
