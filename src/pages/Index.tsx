import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, GraduationCap, Award, Phone, Link as LinkIcon } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import React, { useState } from "react";

const Index = () => {
  // Add state for certification images (one for each card, 4 entries for 4 certs)
  const [certImages, setCertImages] = useState(['/AWARDS/AMIT.png', '/Educations/NTI.png', '/AWARDS/ITI.png', '/AWARDS/MaharaTechpng.png']);
  
  // Handler for uploading images
  const handleCertImageChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const updated = [...certImages];
        updated[index] = e.target?.result as string;
        setCertImages(updated);
      };
      reader.readAsDataURL(file);
    }
  };

  const [awardImages, setAwardImages] = useState(['/AWARDS/IoT-1-1-scaled.webp', '/AWARDS/ICPC-LOGO.png', '/AWARDS/BTU.jfif','/Companies logo/Creativia.png',]);
  const handleAwardImageChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const updated = [...awardImages];
        updated[index] = e.target?.result as string;
        setAwardImages(updated);
      };
      reader.readAsDataURL(file);
    }
  };

  const [educationImages, setEducationImages] = useState(['/Educations/fc_Engineering_Minia.jfif','/Educations/NTI.png']);
  const handleEducationImageChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const updated = [...educationImages];
        updated[index] = e.target?.result as string;
        setEducationImages(updated);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-6 pt-24 pb-16">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <section className="mb-16 flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-shrink-0">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-border overflow-hidden">
                <img
                  src="/Mohab's Picture.jpg"
                  alt="Mohab's Picture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">Mohab Ashraf</h1>
              <p className="text-xl text-muted-foreground mb-4">
                Computer Engineering Graduate
              </p>

              <p className="text-base text-muted-foreground mb-6 leading-relaxed max-w-2xl font-bold">
              Specialized in automotive and embedded systems, I’m driven by innovation and precision,
              creating smart,efficient solutions that push the boundaries of modern vehicle technology and connected systems.
              </p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <MapPin className="h-4 w-4" />
                <span>Giza, Egypt</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary">Automotive Cybersecurity</Badge>
                <Badge variant="secondary">Embedded Systems</Badge>
                <Badge variant="secondary">Software Testing</Badge>
                <Badge variant="secondary">Penteration Testing</Badge>
              </div>

              <div className="flex gap-3">
                <Button 
                  variant="default"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      const offset = 80; // Height of fixed navbar + some padding
                      const elementPosition = contactSection.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  Contact Me
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => {
                    // Update this URL with your resume link or file path
                    window.open('https://drive.google.com/file/d/1g9aLC_bevniOGhMnvUmtMc6QHmh8pFB6/view?usp=sharing', '_blank');
                  }}
                >
                  View Resume
                </Button>
              </div>

              <div className="flex gap-4 mt-6">
                <a href="https://github.com/M00HAB" target="_blank" rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/mohab-ashraf-8a0a86220/" target="_blank" rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="mailto:me.hoba.012@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="mb-16">
            <h2 className="text-2xl font-bold mb-6">About Me</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hi there! I’m a Computer Engineering graduate with hands-on experience in <span className="font-bold">embedded systems</span>, <span className="font-bold">IoT</span>, <span className="font-bold">FPGA development</span>,
                and hardware design.Skilled in <span className="font-bold">C/C++</span> programming, debugging, and testing, with a strong focus on automotive applications.
              
            </p>
            <p className="text-muted-foreground leading-relaxed">
            <span className="font-bold">Currently</span> an <span className="font-bold">Automotive Cybersecurity</span> trainee at the National Telecommunication Institute <span className="font-bold">(NTI - Smart Village Branch)</span>
                where I’m expanding my expertise in securing modern vehicle systems. 
                I’m passionate about creating innovative, secure, and reliable embedded solutions that advance the future of smart and connected mobility.
            </p>
          </section>

          {/* Skills Section */}
          <section id="skills" className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Skills</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">Embedded Systems</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">AVR</Badge>
                    <Badge variant="secondary">ESP32</Badge>
                    <Badge variant="secondary">RP2040</Badge>
                    <Badge variant="secondary">CAN</Badge>
                    <Badge variant="secondary">Ethernet</Badge>
                    <Badge variant="secondary">LIN</Badge>
                    <Badge variant="secondary">LAN</Badge>
                    <Badge variant="secondary">OBD-II</Badge>
                    <Badge variant="secondary">UDS</Badge>
                    <Badge variant="secondary">UART</Badge>
                    <Badge variant="secondary">I2C</Badge>
                    <Badge variant="secondary">SPI</Badge>
                    <Badge variant="secondary">Embedded Linux</Badge>
                    <Badge variant="secondary">Bootloaders (QNX)</Badge>
                    <Badge variant="secondary">Yocto Project</Badge>
                    <Badge variant="secondary">RTOS</Badge>
                    <Badge variant="secondary">PCB</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">Programming languages & Frameworks</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">C/C++</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">Java</Badge>
                    <Badge variant="secondary">C#</Badge>
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">SQL</Badge>
                    <Badge variant="secondary">HTML</Badge>
                    <Badge variant="secondary">CSS</Badge>
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">SQL</Badge>
                    
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Git</Badge>
                    <Badge variant="secondary">Firebase</Badge>
                    <Badge variant="secondary">Eclipse</Badge>
                    <Badge variant="secondary">IntellJ</Badge>
                    <Badge variant="secondary">Clion</Badge>
                    <Badge variant="secondary">Altium</Badge>
                    <Badge variant="secondary">easyEDA</Badge>
                    
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Experience</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-muted border border-border overflow-hidden">
                    <img
                      src="/Companies logo/UPS.jpg"
                      alt="UPS Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">Robotics Instructor</h3>
                  <p className="text-sm text-muted-foreground mb-3">UPS Academy • 2023 - 2025</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Taught Robotics to +1000 students.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Improve their technical skills and preparing them for national competitions.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-muted border border-border overflow-hidden">
                    <img
                      src="/Companies logo/Athar.png"
                      alt="Athar Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">Technical Engineer Intern</h3>
                  <p className="text-sm text-muted-foreground mb-3">Athar • Sep 2023 - Jun 2024</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Developed and implemented embedded system solutions using C/C++ and Python.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Worked with ESP32, Arduino R4, and Raspberry Pi to prototype and integrate IoT systems.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Collaborated in Agile sprints, contributing to testing and integration.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-muted border border-border overflow-hidden">
                    <img
                      src="/Companies logo/Creativia.png"
                      alt="Company Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">Judge & Mentor</h3>
                  <p className="text-sm text-muted-foreground mb-3">Creativia • 2 - 2020</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Mentored 30+ teams in robot design and troubleshooting, improving performance by 30%</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Judged final competition evaluating technical design and implementation.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-16">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Featured Projects</h2>
              <RouterLink to="/projects">
                <Button variant="outline" size="sm">See all projects</Button>
              </RouterLink>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <ProjectCard
                emoji="🚗"
                title="Car Infotainment System"
                description={"Developed Qt-based infotainment system with media player, GPS, and control interface. \nCustomized Linux image with Yocto Project integrating device drivers."}
                link="https://github.com/M00HAB/infotainment-system.git"
              />
              <ProjectCard
                emoji="💡"
                title="Feedback System"
                description="Designed feedback terminal with ESP32 + Raspberry Pi, LCD UI, and UART communication."
                link="#"
              />
              <ProjectCard
                emoji="🚦"
                title="Acamdemic Management System"
                description={">Developed a full-stack Academic Management System to handle students, courses, faculty, and grades with a user-friendly interface.\n>Designed and implemented relational database schema for academic records, enrollment, and course management using MySQL.\n>Followed MVC architecture and clean coding principles to ensure scalability and maintainability."}
                link="#"
              />
              <ProjectCard
                emoji="🏻"
                title="PCB Layout Designs"
                description="Designed 4-layer PCB for RP2040 and ESP32 with full schematic capture and layout."
                link="#"
              />
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <div className="space-y-6">
              {[{
                title: 'Bachelor of Engineering in Computer & Systems Engineering',
                org: 'Minia University  • Sep 2020 - Jun 2025',
                extra: 'Graduated with Very Good (78%).'
              },{
                title: 'Automotive Cybersecurity Penteration Testing',
                org: 'NTI Smart Village Branch •  Oct 2025 - Present',
                extra: ' '
              }].map((edu, idx) => (
                <Card key={edu.title}>
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center overflow-hidden relative group">
                          {educationImages[idx] ? (
                            <img src={educationImages[idx]} alt="Education Logo" className="w-full h-full object-cover" />
                          ) : (
                            <div className="flex flex-col items-center justify-center w-full h-full text-xs text-muted-foreground">
                              <span>Upload</span>
                              <span>Logo</span>
                            </div>
                          )}
                          <input
                            type="file"
                            accept="image/*"
                            className="opacity-0 absolute inset-0 cursor-pointer"
                            style={{ width: '100%', height: '100%' }}
                            onChange={e => handleEducationImageChange(idx, e)}
                            title="Upload education logo"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold">{edu.title}</h3>
                        <p className="text-sm text-muted-foreground">{edu.org}</p>
                        <p className="text-sm text-muted-foreground mt-2">{edu.extra}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Certifications & Licenses Section */}
          <section id="certifications" className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Certifications & Licenses</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[{
                title: "Embedded Linux - AMIT",
                issuer: "Orange Digital Center Scholarship Program",
                year: "Issued Feb 2025",
                link: "https://drive.google.com/file/d/1y-ta8upnbdo9HSkkgja9BMs9p4RhYNNp/view?usp=sharing"
              }, {
                title: "C and Embedded C Programming",
                issuer: "National Telecommunications Institute - NTI",
                year: "Issued Sep 2023",
                link: "https://drive.google.com/file/d/15JkAoZ1abAlnDvqYkwRZv2-jS8aaBqA3/view?usp=sharing"
              }, {
                title: "Embedded Systems Diploma",
                issuer: "Information Technology Institute - ITI",
                year: "Issued Jun 2023",
                link: "https://example.com/cert3"
              }, {
                title: "ISTQP-FL",
                issuer: "Mahara-Tech",
                year: "Issued Oct 2025",
                link: "https://drive.google.com/file/d/1q5sAFPkQKGKNm6Aan2XZaybnL9-Pc6PE/view?usp=sharing"
              }].map((cert, idx) => (
                <Card key={cert.title}>
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center overflow-hidden relative group">
                          {certImages[idx] ? (
                            <img src={certImages[idx]} alt="Certification Icon" className="w-full h-full object-cover" />
                          ) : (
                            <div className="flex flex-col items-center justify-center w-full h-full text-xs text-muted-foreground">
                              <span>Upload</span>
                              <span>Image</span>
                            </div>
                          )}
                          <input
                            type="file"
                            accept="image/*"
                            className="opacity-0 absolute inset-0 cursor-pointer"
                            style={{ width: '100%', height: '100%' }}
                            onChange={e => handleCertImageChange(idx, e)}
                            title="Upload icon image"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold flex items-center gap-1">
                          {cert.title}
                          {cert.link && (
                            <a href={cert.link} target="_blank" rel="noopener noreferrer" title="View Certificate">
                              <LinkIcon className="ml-1 h-4 w-4 text-primary hover:text-blue-500 transition-colors inline-block" />
                            </a>
                          )}
                        </h3>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        <p className="text-sm text-muted-foreground">{cert.year}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Awards & Achievements Section */}
          <section id="awards" className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Awards & Achievements</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Egypt IoT & AI Challenge Competion",
                  desc: "Secured a place among the Top +30 Graduation Projects nationwide out of +600 competing teams, with ecoDrive",
                  org: "Egypt IoT & AI Challange • 2025",
                  link: "https://drive.google.com/file/d/1YvV4h0YCK8IpOfnZT_vkKqHFqQ62ykbl/view?usp=sharing"
                },
                {
                  title: "ECPC 2022 Finalist",
                  desc: "Ranked 2nd out of 50 teams at Minia University, 13th out of 250 teams in Upper Egypt and 98th out of 250 Teams in Egypt.",
                  org: "ICPC Global 2022 • 2nd - 13st - 98th Place",
                  link: "https://drive.google.com/file/d/1kSjvEmicT5wCpO7r1TAE5pCXOJg2u-Mk/view?usp=sharing"
                },
                {
                  title: "Line Follower Competition",
                  desc: "Achieved 2nd place by implementing advanced PID Control algorithm",
                  org: "BTU • 2nd Place 2022"
                },
                {
                  title: "Deliver The Package Competition",
                  desc: "Secured 2nd place with a less than 0.5 second gap from 1st place.",
                  org: "Creativia Hub 2022 • 2nd Place",
                  
                },].map((award, idx) => (
                <Card key={award.title}>
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center overflow-hidden relative group">
                          {awardImages[idx] ? (
                            <img src={awardImages[idx]} alt="Award Icon" className="w-full h-full object-cover" />
                          ) : (
                            <div className="flex flex-col items-center justify-center w-full h-full text-xs text-muted-foreground">
                              <span>Upload</span>
                              <span>Image</span>
                            </div>
                          )}
                          <input
                            type="file"
                            accept="image/*"
                            className="opacity-0 absolute inset-0 cursor-pointer"
                            style={{ width: '100%', height: '100%' }}
                            onChange={e => handleAwardImageChange(idx, e)}
                            title="Upload award image"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold flex items-center gap-1">
                          {award.title}
                          {award.link && (
                            <a href={award.link} target="_blank" rel="noopener noreferrer" title="View Certificate">
                              <LinkIcon className="ml-1 h-4 w-4 text-primary hover:text-blue-500 transition-colors inline-block" />
                            </a>
                          )}
                        </h3>
                        <p className="text-sm text-muted-foreground">{award.org}</p>
                        <p className="text-sm text-muted-foreground mt-2">{award.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:me.hoba.012@gmail.com" className="text-foreground hover:text-primary transition-colors">
                      me.hoba.012@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <a href="tel:+201212544982" className="text-foreground hover:text-primary transition-colors">
                      +201212544982
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Giza, Egypt</span>
                  </div>
                  <div className="flex gap-4 pt-4">
                    <a href="https://github.com/M00HAB" target="_blank" rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/mohab-ashraf-8a0a86220/" target="_blank" rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="mailto:me.hoba.012@gmail.com"
                      className="text-muted-foreground hover:text-foreground transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
