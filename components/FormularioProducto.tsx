import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, X } from "lucide-react";
import Image from "next/image";
import { ProductoType } from "@/types";
import { buildWhatsappLink } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { es as dayPickerEs } from "react-day-picker/locale";

type FormularioProductoProps = {
  isOpen: boolean;
  onClose: () => void;
  producto: ProductoType;
};

export function FormularioProducto({
  isOpen,
  onClose,
  producto,
}: FormularioProductoProps) {
  const [formData, setFormData] = useState<{
    eventName: string;
    hostName: string;
    eventDate: Date | undefined;
    eventTime: string;
    venue: string;
    primaryColor: string;
    customMessage: string;
    datePopupOpened: boolean;
  }>({
    eventName: "",
    hostName: "",
    eventDate: undefined,
    eventTime: "",
    venue: "",
    primaryColor: "#9ad2e1",
    customMessage: "",
    datePopupOpened: false,
  });

  const handleInputChange = (
    field: string,
    value: string | Date | undefined | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message =
      `Hola! Me gustaría cotizar esta invitación "*${producto.name}*" con los siguientes detalles: \n` +
      `Nombre del evento: ${formData.eventName} \n` +
      `Nombre del anfitrión: ${formData.hostName} \n` +
      (formData.eventDate
        ? `Fecha del evento: ${format(formData.eventDate!, "dd/MM/yyyy", {
            locale: es,
          })} ${formData.eventTime} \n`
        : "") +
      `Lugar del evento: ${formData.venue} \n` +
      `Color principal: ${formData.primaryColor} \n` +
      `Mensaje personalizado: ${formData.customMessage}`;

    window.open(buildWhatsappLink(message), "_blank");

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-hidden">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-[#252b42]">
                Personalizar Invitación
              </h2>
              <p className="text-sm text-[#737373]">{producto.name}</p>
            </div>
            <Button size="sm" variant={"link"} onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          <div className="mb-6">
            <div className="w-full bg-[#f7f3ee] rounded-lg flex items-center justify-center overflow-hidden border-2 border-dashed border-[#9ad2e1]/30">
              <Image
                src={producto.imageUrl || "/placeholder.svg"}
                alt={producto.name}
                width={1500}
                height={1500}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <p className="text-xs text-[#737373] text-center mt-2">
              Vista previa del diseño seleccionado
            </p>
          </div>
          {/* 
          <div className="mb-6 p-4 bg-[#f7f3ee] rounded-lg">
            <h3 className="text-sm font-semibold text-[#252b42] mb-3">
              Vista previa de tu invitación:
            </h3>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center space-y-2">
              <h4
                className="font-bold text-lg"
                style={{ color: formData.primaryColor }}
              >
                {formData.eventName || "Nombre del Evento"}
              </h4>
              <p className="text-sm text-[#737373]">
                {formData.hostName || "Tu nombre"}
              </p>
              <p className="text-sm text-[#737373]">
                {formData.eventDate
                  ? new Date(formData.eventDate).toLocaleDateString("es-ES", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "Fecha del evento"}
              </p>
              {formData.customMessage && (
                <p className="text-xs text-[#737373] italic mt-2">
                  &quot;{formData.customMessage}&quot;
                </p>
              )}
            </div>
          </div> */}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="eventName">Nombre del evento *</Label>
              <Input
                id="eventName"
                placeholder="Ej: Cumpleaños de María"
                value={formData.eventName}
                onChange={(e) => handleInputChange("eventName", e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="hostName">Tu nombre *</Label>
              <Input
                id="hostName"
                placeholder="Ej: María González"
                value={formData.hostName}
                onChange={(e) => handleInputChange("hostName", e.target.value)}
                required
              />
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col w-full">
                <Label htmlFor="date-picker" className="px-1">
                  Fecha del evento *
                </Label>
                <Popover
                  open={formData.datePopupOpened}
                  onOpenChange={(opened) =>
                    handleInputChange("datePopupOpened", opened)
                  }
                >
                  <PopoverTrigger asChild>
                    <Button
                      variant="form"
                      data-empty={!formData.eventDate}
                      id="date-picker"
                      className="data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left font-normal"
                    >
                      <CalendarIcon />
                      {formData.eventDate ? (
                        format(formData.eventDate, "dd/MM/yyyy", {
                          locale: es,
                        })
                      ) : (
                        <span>Elegir fecha</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.eventDate}
                      captionLayout="dropdown"
                      onSelect={(date) => {
                        setFormData((prev) => ({
                          ...prev,
                          eventDate: date,
                          datePopupOpened: false,
                        }));
                      }}
                      locale={dayPickerEs}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="flex flex-col w-full">
                <Label htmlFor="time-picker" className="px-1">
                  Hora
                </Label>
                <Input
                  type="time"
                  id="time-picker"
                  step="1"
                  defaultValue="00:00:00"
                  onChange={(e) =>
                    handleInputChange("eventTime", e.target.value)
                  }
                  className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="location">Ubicación *</Label>
              <Input
                id="location"
                placeholder="Salón de eventos"
                value={formData.venue}
                onChange={(e) => handleInputChange("venue", e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="primaryColor">Color principal</Label>
              <div className="flex items-center space-x-2">
                <input
                  type="color"
                  id="primaryColor"
                  value={formData.primaryColor}
                  onChange={(e) =>
                    handleInputChange("primaryColor", e.target.value)
                  }
                  className="w-12 h-10 rounded border border-gray-300"
                />
                <Input
                  value={formData.primaryColor}
                  onChange={(e) =>
                    handleInputChange("primaryColor", e.target.value)
                  }
                  placeholder="#9ad2e1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="customMessage">Mensaje especial (opcional)</Label>
              <Textarea
                id="customMessage"
                placeholder="Ej: ¡Ven a celebrar conmigo!"
                value={formData.customMessage}
                onChange={(e) =>
                  handleInputChange("customMessage", e.target.value)
                }
                rows={2}
              />
            </div>

            <div className="flex space-x-3 pt-4">
              <Button
                variant="outline"
                onClick={onClose}
                className="flex-1 bg-transparent"
              >
                Cancelar
              </Button>
              <Button type="submit" variant="default" className="flex-1">
                Continuar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
